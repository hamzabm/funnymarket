import { Component,Input,OnInit,Output ,OnChanges,EventEmitter} from '@angular/core'


@Component({
    selector:'paging',
    template:` 
    <nav *ngIf="this.Size>this.pageSize" aria-label="Page navigation">
  <ul id={{currentPage}} class="pagination">
    <li [class.disabled]="currentPage==firstPage">
      <a  (click)=goToPage(currentPage-1)  aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li #list *ngFor="let page of paginationSize " id="{{page+1}}"  [class.active]="currentPage==list.id" ><a (click)=goToPage(page+1)>{{ page+1 }}</a></li>
    <li  [class.disabled]="currentPage==lastPage" >
      <a (click)=goToPage(currentPage+1)  aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    `
})
export class PagingComponent implements OnInit,OnChanges{
   Size=70;
  @Input() pageSize=10;
@Input() items:any=[{id:""}];
@Output('page-changed') pageChanged = new EventEmitter();
  pageNumbers=0;
  firstPage=1;
  lastPage=100;
  @Input() currentPage=1;
 paginationSize:number[];
constructor(){
}

 goToPage(index){
   this.currentPage=(index<this.firstPage)? this.firstPage: (index>this.lastPage)? this.lastPage :index ;
     this.pageChanged.emit(this.currentPage);
     this.Size=this.items.length;
      this.updatePagingSize();
 }
 updatePagingSize(){
 var nbPage=this.Size/this.pageSize;
  this.pageNumbers= ( nbPage % Math.round(nbPage) != 0 )? parseInt(String(nbPage))+1 :nbPage  ;
  this.paginationSize=Array(this.pageNumbers).fill(1).map((x,i)=>i);
  this.lastPage=this.pageNumbers
 }
 ngOnInit(){
 this.Size=this.items.length;
  this.updatePagingSize();
 }
 ngOnChanges(){
 this.Size=this.items.length;
  this.updatePagingSize();
 }

}