import {NgModule} from '@angular/core'
import {CommonModule} from  '@angular/common'

import {PostComponenet} from './post.component'
import { SharedModule } from './../shared/shared.module'

import { AppModule } from './../app.module'

import {PostService} from './posts.service'
import {CommentsService} from './../comments/comments.service'

@NgModule({
    imports:[
        CommonModule,
        SharedModule
    ],
    declarations:[
        PostComponenet,
    ],
    exports: [
        PostComponenet
    ],
    providers:[PostService,CommentsService]
})
export class PostsModule {

}