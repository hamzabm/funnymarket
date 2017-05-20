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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var emailValidators_1 = require('./emailValidators');
var users_service_1 = require('./users.service');
var User_1 = require('./User');
var AddUserComponent = (function () {
    function AddUserComponent(fb, _UserServices, _router, _activedRouter) {
        this._UserServices = _UserServices;
        this._router = _router;
        this._activedRouter = _activedRouter;
        this.title = ' Add a User';
        this.user = new User_1.User();
        this.addUserForm = fb.group({
            name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required,
                emailValidators_1.EmailValidators.validEmail],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }
    AddUserComponent.prototype.hasUnsavedChanges = function () {
        if (this.addUserForm.dirty) {
            return true;
        }
        else
            return false;
    };
    AddUserComponent.prototype.onSubmit = function (addUserForm) {
        var _this = this;
        if (!this._activedRouter.snapshot.params['id']) {
            this._UserServices.creatUser(addUserForm.value).subscribe(function (user) { _this._router.navigate(['users']); });
        }
        else {
            this.user = addUserForm.value;
            this.user.id = this._activedRouter.snapshot.params['id'];
            this._UserServices.UpdateUser(this.user).subscribe(function (user) { _this._router.navigate(['users']); });
        }
    };
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this._router.isActive('users/new', false));
        if (this._router.isActive('users/new', true)) {
        }
        else {
            this.title = "Edit User";
            console.log("called from edit");
            var id = this._activedRouter.snapshot.params['id'];
            this._UserServices.getUser(id)
                .subscribe(function (user) {
                _this.user = user;
                _this.user.id = id;
            }, function (response) {
                if (response.status == 404) {
                    _this._router.navigate(['NotFound']);
                }
            });
        }
    };
    AddUserComponent = __decorate([
        core_1.Component({
            selector: 'adduser',
            templateUrl: 'app/users/adduser.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, users_service_1.UsersService, router_1.Router, router_1.ActivatedRoute])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=adduser.component.js.map