import { Component } from '@angular/core'
import { CommentsService } from './comments.service'

@Component({
    selector:'comments',
    template:`
    <div>
        <div ngFor="comment of Comments"  class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="..." alt="...">
                </a>
                </div>
            <div class="media-body">
            <h4 class="media-heading">Media heading</h4>
            </div>
    </div>
</div>

    `

})

export class CommentComponent {
Comments;


}