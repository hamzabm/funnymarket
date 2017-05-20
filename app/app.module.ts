import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { AppComponent }      from './app.component';
import { HomeComponent }     from './home.component';
import { SplashscreenComponent }     from './splashscreen.component';
import { NotFoundComponent } from './not-found.component';


import { UsersModule }  from './users/users.module'
import { PostsModule }  from './posts/posts.module'
import { NavbarModule } from  './navbar/navbar.module'
import { SharedModule } from './shared/shared.module'
import { routing }      from './app.routing'
import { usersRouting } from './users/users.routing'
import { postsRouting } from './posts/posts.routing'

import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes.service'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UsersModule,
    PostsModule,
    postsRouting,
    usersRouting,
    routing,
    NavbarModule,
    SharedModule    
  ],
  providers:[PreventUnsavedChangesGuard],
  declarations: [ 
    AppComponent,
    HomeComponent,
    SplashscreenComponent,
    NotFoundComponent
  ],
  exports:[
    NotFoundComponent
  ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }