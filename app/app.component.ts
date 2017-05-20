import { Component } from '@angular/core';
import {Router} from '@angular/router'

import { NavbarComponent } from './navbar/navbar.component'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
      <router-outlet></router-outlet> 
  </div> 
`,
directives:[NavbarComponent]
})
export class AppComponent {
  constructor(){

  }
  
}