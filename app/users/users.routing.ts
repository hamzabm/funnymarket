import {Router,RouterModule} from '@angular/router'
import {UsersComponent} from './user.component'
import {AddUserComponent} from './adduser.component'

import { PreventUnsavedChangesGuard } from './../prevent-unsaved-changes.service'

export const usersRouting=RouterModule.forChild([
    {
        path:'users',
        component:UsersComponent
    },{
        path:'users/:id',
        component:AddUserComponent
    },
    {
        path:'users/new',
        component:AddUserComponent,
        canDeactivate:[PreventUnsavedChangesGuard]
    }

])