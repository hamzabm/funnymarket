import { NgModule }     from '@angular/core';
import {RouterModule} from  '@angular/router'

import { CommentsService } from './comments.service'

@NgModule({
providers:[CommentsService]
})
export class NavbarModule {
}