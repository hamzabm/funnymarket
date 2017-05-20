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
require('rxjs/add/operator/map');
var http_1 = require('@angular/http');
var UsersService = (function () {
    function UsersService(_http) {
        this._http = _http;
        this._url = "https://jsonplaceholder.typicode.com";
    }
    UsersService.prototype.getUsers = function () {
        return this._http.get(this._url + "/users")
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getUser = function (id) {
        return this._http.get(this._url + "/users/" + id)
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.UpdateUser = function (user) {
        console.log(user);
        return this._http.put(this._url + "/users/" + user.id, JSON.stringify(user))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.deleteUser = function (id) {
        console.log(id);
        return this._http.delete(this._url + "/users/" + id)
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.creatUser = function (user) {
        return this._http.post(this._url + "/users", JSON.stringify(user))
            .map(function (res) { return res.json(); });
    };
    UsersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map