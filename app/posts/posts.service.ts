import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';

import {Http} from '@angular/http'


@Injectable()
export class PostService {
    private _url:string="https://jsonplaceholder.typicode.com"
    constructor(private _http:Http){ }
getPosts(userId?):Observable<any[]>{
     var condition = (userId!=null) ? "?userId="+userId :""; 
    return this._http.get(this._url+"/posts"+condition)
    .map(res=>res.json());

}

getPost(id:number):Observable<any>{
    return this._http.get(this._url+"/posts/"+id)
    .map(res=>res.json());

}
Updatepost(post){
    console.log(post);
return this._http.put(this._url+"/posts/"+post.id,JSON.stringify(post))
    .map(res=>res.json());
}

deleteUser(id){
    console.log(id);
return this._http.delete(this._url+"/users/"+id)
    .map(res=>res.json());
}


creatPost(post){
return this._http.post(this._url+"/users",JSON.stringify(post))
    .map(res=>res.json());
}

}