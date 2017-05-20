import {Component} from '@angular/core'
import {OnInit} from '@angular/core'
import {User} from './User'
import { UsersService } from './users.service'

@Component({
    selector:'users',
    template:`<h1> Users </h1>
            <p><a class="btn btn-primary" routerLink='new' >Add User</a></p>
            <table class="table table-bordered">
            <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
            </thead>
            <tr *ngIf="isLoading" > <i class="fa fa-spinner fa-spin fa-3x"></i> </tr>
            <tr *ngFor="let user of _Users" >
            <td> {{ user.name }} </td>
            <td> {{ user.email }} </td>
            <td><a routerLink="{{user.id}}"> <i class="glyphicon glyphicon-edit"></i></a> </td>
            <td><a  (click)="deleteUser( user.id )" > <i class="glyphicon glyphicon-remove"></i></a> </td>
            </tr>
              </table> `
})
export class UsersComponent implements OnInit {
    isLoading=true;
    _Users:User[]=[];
    constructor(private _UserServices:UsersService){

    }
deleteUser(id){
        var tmpUsers:User[]=this._Users;
        this._Users.forEach((user:User,index)=>{
            if(user.id==id){
                this._Users.splice(index,1);
            }
        })
        
        this._UserServices.deleteUser(id).subscribe(res=>{
            console.log(res);
            if(res!=1){
                this._Users=tmpUsers
            }
        }

        )
}

ngOnInit(){
    this._UserServices.getUsers().subscribe(
        users=>{
            console.log(users);
            this.isLoading=false;
            this._Users=users;
            
        }
    )
}

}