import { NgModule }     from '@angular/core';

import { UsersComponent } from './user.component';
import { AddUserComponent } from './adduser.component';


import { UsersService } from './users.service'


import  {RouterModule} from '@angular/router'
import {CommonModule} from  '@angular/common'
import {HTTP_PROVIDERS} from '@angular/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        UsersComponent,
        AddUserComponent
    ],
    exports: [
       UsersComponent,
       AddUserComponent
    ],
providers:[
    UsersService,HTTP_PROVIDERS
]
})
export class UsersModule {
}