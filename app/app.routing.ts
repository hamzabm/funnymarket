import {Router,RouterModule} from '@angular/router'

import {HomeComponent} from './home.component'
import {SplashscreenComponent} from './splashscreen.component' 
import {NotFoundComponent} from './not-found.component'

export const routing=RouterModule.forRoot([
    {path:'',component:HomeComponent},
     {path:'splachscreen',component:SplashscreenComponent},
    {path:'**',component:NotFoundComponent}
])