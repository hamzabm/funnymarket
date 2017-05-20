"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var splashscreen_component_1 = require('./splashscreen.component');
var not_found_component_1 = require('./not-found.component');
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'splachscreen', component: splashscreen_component_1.SplashscreenComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
]);
//# sourceMappingURL=app.routing.js.map