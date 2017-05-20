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
var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
        this._url = "https://jsonplaceholder.typicode.com";
    }
    PostService.prototype.getPosts = function (userId) {
        var condition = (userId != null) ? "?userId=" + userId : "";
        return this._http.get(this._url + "/posts" + condition)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getPost = function (id) {
        return this._http.get(this._url + "/posts/" + id)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.Updatepost = function (post) {
        console.log(post);
        return this._http.put(this._url + "/posts/" + post.id, JSON.stringify(post))
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.deleteUser = function (id) {
        console.log(id);
        return this._http.delete(this._url + "/users/" + id)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.creatPost = function (post) {
        return this._http.post(this._url + "/users", JSON.stringify(post))
            .map(function (res) { return res.json(); });
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=posts.service.js.map