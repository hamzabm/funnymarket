import {Component, OnInit} from '@angular/core'
import { PostService } from './posts.service'
import { CommentsService } from './../comments/comments.service'
import { UsersService } from './../users/users.service'

@Component({
    selector:'posts',
    template:`  <h1> Posts </h1>
            <div	class="row">
                <div	class="col-md-6">
                <select class="form-control"  #u (change)=reloadPosts(u.value)> 
                <option value="0">All Posts</option>
                <option *ngFor=" let user of users"  value="{{user.id}}">{{ user.name }} </option>
                </select>
                <paging  *ngIf="Posts" [pageSize]=pageSize  [items]="Posts"   (page-changed)="updatePaging($event)" ></paging>
                    <ul class="list-group">
                        <li   *ngFor=" let post of currentPosts "  (click)="selectPost(post.id)" class="list-group-item" >
                        {{ post.title }} 
                        </li>
                    </ul>
                </div>
            
            <div *ngIf="selectedPost.id" class="col-md-6">
               <div class="panel panel-default">
                    <div class="panel-heading">{{selectedPost.title}}</div>
                    <div class="panel-body">
                    <p>
                     <spinner [Visible]="postLoading"></spinner>
                    {{selectedPost.body}}</p>
                </div>
            </div>
            
         <spinner [Visible]="CommentLoading"></spinner>
        <div *ngIf="commentsExist"> 
        <div  *ngFor="let comment of Comments"  class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" style="border-radius:100%" src="http://lorempixel.com/80/80/people/?random={{ comment.id }}" alt="{{ comment.name }}">
                </a>
                </div>
            <div class="media-body">
            <h4 class="media-heading">{{ comment.name }}</h4>
            {{ comment.body }}
            </div>
        </div>
    </div>
    </div>






            `,
            styles:[	'li	{	cursor:	default;	}', 'li:hover	{	background:	#ecf0f1;	}',`.list-group-item.active,	
.list-group-item.active:hover,	
.list-group-item.active:focus	{	
	 background-color:	#ecf0f1;
	 border-color:	#ecf0f1;	
	 color:	#2c3e50;}`]

})
export class PostComponenet  implements OnInit{
Posts:any[];
pageSize=10;
postLoading=true;
CommentLoading=true;
currentPosts:any[]
selectedPost={id:null};
Comments:any[];
commentsExist:boolean=false;
users;

constructor(private _postService:PostService, private _commentsService:CommentsService,private _usersService:UsersService){
}


updatePaging(page){
    var start=(page-1)*this.pageSize;
     var end=(page!=this.Posts.length)? start+this.pageSize-1 : this.Posts.length-1;
   this.currentPosts= _.take(_.rest(this.Posts,start),this.pageSize)

}



/*
 getPostsIntervale(items,start,end):any[] {
      return  this.currentPosts=items.slice(start,end);
 }


*/




selectPost(id){
    this.postLoading=true;
      this._postService.getPost(id).subscribe(post=>{
            this.postLoading=false;
            this.selectedPost=post; 
           // console.log("post",post);
            this._commentsService.getCommentsByIdPost(id).subscribe(comments=>{
                this.Comments=comments;
                if(this.Comments.length!=0){
                   this.commentsExist=true;
                }else {this.commentsExist=false;
                }
                this.CommentLoading=false;
            })
        })

}


private getPostInPage(page){
    var results=[];
    var startingIndex=(page-1)*this.pageSize;
    var endIndex=Math.min(startingIndex+startingIndex+this.pageSize,this.Posts.length-1);
    for (var i=startingIndex;i<endIndex;i++)
    {
        results.push(this.Posts[i]);
    }
    return results;
}


reloadPosts(userID?){
 this._postService.getPosts((userID!=0) ? userID : null ).subscribe(posts=>{
            this.postLoading=false;
            this.Posts=posts;
            this.currentPosts=_.take(this.Posts,this.pageSize);
            this.selectedPost={id:null};
        })
} 

loadUser(){
    this._usersService.getUsers().subscribe(users=>{
            this.users=users
        });
}

    ngOnInit(){
       this.loadUser(); 
       this.reloadPosts();
    }
    
}