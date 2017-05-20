import {CanDeactivate} from '@angular/router'
import  { FormGroup } from '@angular/forms'

export interface formComponent{
    hasUnsavedChanges():boolean
}

export class PreventUnsavedChangesGuard implements CanDeactivate<formComponent>{

    canDeactivate(component:formComponent){
        console.log("candeactivate");
        console.log(component.hasUnsavedChanges());
        if (component.hasUnsavedChanges())
        {
            return confirm ("You have unsaved changes !!  Go any way ?");
                    
        }
        return true;
    }
}