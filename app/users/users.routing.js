"use strict";
var router_1 = require('@angular/router');
var user_component_1 = require('./user.component');
var adduser_component_1 = require('./adduser.component');
var prevent_unsaved_changes_service_1 = require('./../prevent-unsaved-changes.service');
exports.usersRouting = router_1.RouterModule.forChild([
    {
        path: 'users',
        component: user_component_1.UsersComponent
    }, {
        path: 'users/:id',
        component: adduser_component_1.AddUserComponent
    },
    {
        path: 'users/new',
        component: adduser_component_1.AddUserComponent,
        canDeactivate: [prevent_unsaved_changes_service_1.PreventUnsavedChangesGuard]
    }
]);
//# sourceMappingURL=users.routing.js.map