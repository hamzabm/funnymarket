import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';

import {Http} from '@angular/http'

import {User} from './User'

@Injectable()
export class UsersService {
    private _url:string="https://jsonplaceholder.typicode.com"
    constructor(private _http:Http){ }
getUsers():Observable<User[]>{
    return this._http.get(this._url+"/users")
    .map(res=>res.json());

}
getUser(id:number):Observable<User>{
    return this._http.get(this._url+"/users/"+id)
    .map(res=>res.json());

}
UpdateUser(user){
    console.log(user);
return this._http.put(this._url+"/users/"+user.id,JSON.stringify(user))
    .map(res=>res.json());
}

deleteUser(id){
    console.log(id);
return this._http.delete(this._url+"/users/"+id)
    .map(res=>res.json());
}


creatUser(user){
return this._http.post(this._url+"/users",JSON.stringify(user))
    .map(res=>res.json());
}

}