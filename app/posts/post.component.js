"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var posts_service_1 = require('./posts.service');
var comments_service_1 = require('./../comments/comments.service');
var users_service_1 = require('./../users/users.service');
var PostComponenet = (function () {
    function PostComponenet(_postService, _commentsService, _usersService) {
        this._postService = _postService;
        this._commentsService = _commentsService;
        this._usersService = _usersService;
        this.pageSize = 10;
        this.postLoading = true;
        this.CommentLoading = true;
        this.selectedPost = { id: null };
        this.commentsExist = false;
    }
    PostComponenet.prototype.updatePaging = function (page) {
        var start = (page - 1) * this.pageSize;
        var end = (page != this.Posts.length) ? start + this.pageSize - 1 : this.Posts.length - 1;
        this.currentPosts = _.take(_.rest(this.Posts, start), this.pageSize);
    };
    /*
     getPostsIntervale(items,start,end):any[] {
          return  this.currentPosts=items.slice(start,end);
     }
    
    
    */
    PostComponenet.prototype.selectPost = function (id) {
        var _this = this;
        this.postLoading = true;
        this._postService.getPost(id).subscribe(function (post) {
            _this.postLoading = false;
            _this.selectedPost = post;
            // console.log("post",post);
            _this._commentsService.getCommentsByIdPost(id).subscribe(function (comments) {
                _this.Comments = comments;
                if (_this.Comments.length != 0) {
                    _this.commentsExist = true;
                }
                else {
                    _this.commentsExist = false;
                }
                _this.CommentLoading = false;
            });
        });
    };
    PostComponenet.prototype.getPostInPage = function (page) {
        var results = [];
        var startingIndex = (page - 1) * this.pageSize;
        var endIndex = Math.min(startingIndex + startingIndex + this.pageSize, this.Posts.length - 1);
        for (var i = startingIndex; i < endIndex; i++) {
            results.push(this.Posts[i]);
        }
        return results;
    };
    PostComponenet.prototype.reloadPosts = function (userID) {
        var _this = this;
        this._postService.getPosts((userID != 0) ? userID : null).subscribe(function (posts) {
            _this.postLoading = false;
            _this.Posts = posts;
            _this.currentPosts = _.take(_this.Posts, _this.pageSize);
            _this.selectedPost = { id: null };
        });
    };
    PostComponenet.prototype.loadUser = function () {
        var _this = this;
        this._usersService.getUsers().subscribe(function (users) {
            _this.users = users;
        });
    };
    PostComponenet.prototype.ngOnInit = function () {
        this.loadUser();
        this.reloadPosts();
    };
    PostComponenet = __decorate([
        core_1.Component({
            selector: 'posts',
            template: "  <h1> Posts </h1>\n            <div\tclass=\"row\">\n                <div\tclass=\"col-md-6\">\n                <select class=\"form-control\"  #u (change)=reloadPosts(u.value)> \n                <option value=\"0\">All Posts</option>\n                <option *ngFor=\" let user of users\"  value=\"{{user.id}}\">{{ user.name }} </option>\n                </select>\n                <paging  *ngIf=\"Posts\" [pageSize]=pageSize  [items]=\"Posts\"   (page-changed)=\"updatePaging($event)\" ></paging>\n                    <ul class=\"list-group\">\n                        <li   *ngFor=\" let post of currentPosts \"  (click)=\"selectPost(post.id)\" class=\"list-group-item\" >\n                        {{ post.title }} \n                        </li>\n                    </ul>\n                </div>\n            \n            <div *ngIf=\"selectedPost.id\" class=\"col-md-6\">\n               <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">{{selectedPost.title}}</div>\n                    <div class=\"panel-body\">\n                    <p>\n                     <spinner [Visible]=\"postLoading\"></spinner>\n                    {{selectedPost.body}}</p>\n                </div>\n            </div>\n            \n         <spinner [Visible]=\"CommentLoading\"></spinner>\n        <div *ngIf=\"commentsExist\"> \n        <div  *ngFor=\"let comment of Comments\"  class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                    <img class=\"media-object\" style=\"border-radius:100%\" src=\"http://lorempixel.com/80/80/people/?random={{ comment.id }}\" alt=\"{{ comment.name }}\">\n                </a>\n                </div>\n            <div class=\"media-body\">\n            <h4 class=\"media-heading\">{{ comment.name }}</h4>\n            {{ comment.body }}\n            </div>\n        </div>\n    </div>\n    </div>\n\n\n\n\n\n\n            ",
            styles: ['li	{	cursor:	default;	}', 'li:hover	{	background:	#ecf0f1;	}', ".list-group-item.active,\t\n.list-group-item.active:hover,\t\n.list-group-item.active:focus\t{\t\n\t background-color:\t#ecf0f1;\n\t border-color:\t#ecf0f1;\t\n\t color:\t#2c3e50;}"]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostService, comments_service_1.CommentsService, users_service_1.UsersService])
    ], PostComponenet);
    return PostComponenet;
}());
exports.PostComponenet = PostComponenet;
//# sourceMappingURL=post.component.js.map