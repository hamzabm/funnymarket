import {Component,OnInit} from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'

import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {EmailValidators} from './emailValidators'

import {formComponent} from './../prevent-unsaved-changes.service'
import { UsersService } from './users.service'

import {User} from './User'

@Component({
    selector:'adduser',
    templateUrl:'app/users/adduser.component.html'
})
export class AddUserComponent  implements formComponent,OnInit {
    addUserForm: FormGroup; 
    title=' Add a User';
    user=new User();
    


constructor(fb: FormBuilder,private _UserServices:UsersService , private  _router:Router, private _activedRouter:ActivatedRoute ){
    this.addUserForm=fb.group({
        name:['',Validators.required],
        email:['', Validators.required,
            EmailValidators.validEmail],
        phone:[],
        address:fb.group({
            street:[],
            suite:[],
            city:[],
            zipcode:[]
        })
    })
}

hasUnsavedChanges(){
if(this.addUserForm.dirty){
    return true;
}
else return false;
}

onSubmit(addUserForm){
  
if(!this._activedRouter.snapshot.params['id']){
 this._UserServices.creatUser(addUserForm.value).subscribe(
        user=>{this._router.navigate(['users']);})
}
else {
    this.user=addUserForm.value;
    this.user.id=this._activedRouter.snapshot.params['id'];
    this._UserServices.UpdateUser(this.user).subscribe(
        user=>{this._router.navigate(['users']);})
}
}



ngOnInit(){
    console.log(this._router.isActive('users/new',false));
    if (this._router.isActive('users/new',true)){
    }
    else {
        this.title="Edit User";
        console.log("called from edit");
        var id:number=this._activedRouter.snapshot.params['id']
        this._UserServices.getUser(id)
                            .subscribe(user=>
                                        {
                                            this.user=user
                                            this.user.id=id;
                                        },
                                    response=>{
                                            if(response.status==404){
                                                this._router.navigate(['NotFound']);
                                            }
                                    });
}
}


}
