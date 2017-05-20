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
var PagingComponent = (function () {
    function PagingComponent() {
        this.Size = 70;
        this.pageSize = 10;
        this.items = [{ id: "" }];
        this.pageChanged = new core_1.EventEmitter();
        this.pageNumbers = 0;
        this.firstPage = 1;
        this.lastPage = 100;
        this.currentPage = 1;
    }
    PagingComponent.prototype.goToPage = function (index) {
        this.currentPage = (index < this.firstPage) ? this.firstPage : (index > this.lastPage) ? this.lastPage : index;
        this.pageChanged.emit(this.currentPage);
        this.Size = this.items.length;
        this.updatePagingSize();
    };
    PagingComponent.prototype.updatePagingSize = function () {
        var nbPage = this.Size / this.pageSize;
        this.pageNumbers = (nbPage % Math.round(nbPage) != 0) ? parseInt(String(nbPage)) + 1 : nbPage;
        this.paginationSize = Array(this.pageNumbers).fill(1).map(function (x, i) { return i; });
        this.lastPage = this.pageNumbers;
    };
    PagingComponent.prototype.ngOnInit = function () {
        this.Size = this.items.length;
        this.updatePagingSize();
    };
    PagingComponent.prototype.ngOnChanges = function () {
        this.Size = this.items.length;
        this.updatePagingSize();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PagingComponent.prototype, "pageSize", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PagingComponent.prototype, "items", void 0);
    __decorate([
        core_1.Output('page-changed'), 
        __metadata('design:type', Object)
    ], PagingComponent.prototype, "pageChanged", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PagingComponent.prototype, "currentPage", void 0);
    PagingComponent = __decorate([
        core_1.Component({
            selector: 'paging',
            template: " \n    <nav *ngIf=\"this.Size>this.pageSize\" aria-label=\"Page navigation\">\n  <ul id={{currentPage}} class=\"pagination\">\n    <li [class.disabled]=\"currentPage==firstPage\">\n      <a  (click)=goToPage(currentPage-1)  aria-label=\"Previous\">\n        <span aria-hidden=\"true\">&laquo;</span>\n      </a>\n    </li>\n    <li #list *ngFor=\"let page of paginationSize \" id=\"{{page+1}}\"  [class.active]=\"currentPage==list.id\" ><a (click)=goToPage(page+1)>{{ page+1 }}</a></li>\n    <li  [class.disabled]=\"currentPage==lastPage\" >\n      <a (click)=goToPage(currentPage+1)  aria-label=\"Next\">\n        <span aria-hidden=\"true\">&raquo;</span>\n      </a>\n    </li>\n  </ul>\n</nav>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PagingComponent);
    return PagingComponent;
}());
exports.PagingComponent = PagingComponent;
//# sourceMappingURL=paging.component.js.map