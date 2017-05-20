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
var users_service_1 = require('./users.service');
var UsersComponent = (function () {
    function UsersComponent(_UserServices) {
        this._UserServices = _UserServices;
        this.isLoading = true;
        this._Users = [];
    }
    UsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        var tmpUsers = this._Users;
        this._Users.forEach(function (user, index) {
            if (user.id == id) {
                _this._Users.splice(index, 1);
            }
        });
        this._UserServices.deleteUser(id).subscribe(function (res) {
            console.log(res);
            if (res != 1) {
                _this._Users = tmpUsers;
            }
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._UserServices.getUsers().subscribe(function (users) {
            console.log(users);
            _this.isLoading = false;
            _this._Users = users;
        });
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            template: "<h1> Users </h1>\n            <p><a class=\"btn btn-primary\" routerLink='new' >Add User</a></p>\n            <table class=\"table table-bordered\">\n            <thead>\n            <tr>\n            <th>Name</th>\n            <th>Email</th>\n            <th>Edit</th>\n            <th>Delete</th>\n            </tr>\n            </thead>\n            <tr *ngIf=\"isLoading\" > <i class=\"fa fa-spinner fa-spin fa-3x\"></i> </tr>\n            <tr *ngFor=\"let user of _Users\" >\n            <td> {{ user.name }} </td>\n            <td> {{ user.email }} </td>\n            <td><a routerLink=\"{{user.id}}\"> <i class=\"glyphicon glyphicon-edit\"></i></a> </td>\n            <td><a  (click)=\"deleteUser( user.id )\" > <i class=\"glyphicon glyphicon-remove\"></i></a> </td>\n            </tr>\n              </table> "
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=user.component.js.map