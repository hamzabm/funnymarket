
import {Router,RouterModule} from '@angular/router';
import {PostComponenet} from './post.component';

export const postsRouting = RouterModule.forChild([
    {
        path:'posts',
        component:PostComponenet
    }
])