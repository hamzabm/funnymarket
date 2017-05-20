"use strict";
var PreventUnsavedChangesGuard = (function () {
    function PreventUnsavedChangesGuard() {
    }
    PreventUnsavedChangesGuard.prototype.canDeactivate = function (component) {
        console.log("candeactivate");
        console.log(component.hasUnsavedChanges());
        if (component.hasUnsavedChanges()) {
            return confirm("You have unsaved changes !!  Go any way ?");
        }
        return true;
    };
    return PreventUnsavedChangesGuard;
}());
exports.PreventUnsavedChangesGuard = PreventUnsavedChangesGuard;
//# sourceMappingURL=prevent-unsaved-changes.service.js.map