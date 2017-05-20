import { NgModule }     from '@angular/core';
import {CommonModule} from  '@angular/common'

import { PagingComponent } from './paging.component';
import { SpinnerComponent } from './spinner.component';



@NgModule({
    imports:[
        CommonModule
        ],
    declarations: [
        SpinnerComponent,
        PagingComponent
    ],
    exports: [
       SpinnerComponent,
       PagingComponent
       
    ]
})
export class SharedModule {
}