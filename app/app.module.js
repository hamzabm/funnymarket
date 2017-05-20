"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home.component');
var splashscreen_component_1 = require('./splashscreen.component');
var not_found_component_1 = require('./not-found.component');
var users_module_1 = require('./users/users.module');
var posts_module_1 = require('./posts/posts.module');
var navbar_module_1 = require('./navbar/navbar.module');
var shared_module_1 = require('./shared/shared.module');
var app_routing_1 = require('./app.routing');
var users_routing_1 = require('./users/users.routing');
var posts_routing_1 = require('./posts/posts.routing');
var prevent_unsaved_changes_service_1 = require('./prevent-unsaved-changes.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                users_module_1.UsersModule,
                posts_module_1.PostsModule,
                posts_routing_1.postsRouting,
                users_routing_1.usersRouting,
                app_routing_1.routing,
                navbar_module_1.NavbarModule,
                shared_module_1.SharedModule
            ],
            providers: [prevent_unsaved_changes_service_1.PreventUnsavedChangesGuard],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                splashscreen_component_1.SplashscreenComponent,
                not_found_component_1.NotFoundComponent
            ],
            exports: [
                not_found_component_1.NotFoundComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map