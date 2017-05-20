import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';

import {Http} from '@angular/http'


@Injectable()
export class CommentsService {
    private _url:string="https://jsonplaceholder.typicode.com"
    constructor(private _http:Http){ }
getCommentsByIdPost(idPost):Observable<any[]>{
    return this._http.get(this._url+"/posts/"+idPost+"/comments")
    .map(res=>res.json());

}






}