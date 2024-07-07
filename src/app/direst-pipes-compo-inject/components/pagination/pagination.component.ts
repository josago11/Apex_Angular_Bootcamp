import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnChanges {

  @Input({ required: true, transform: numberAttribute }) itemsNum!:number;

  ngOnChanges(changes: SimpleChanges): void {
    this.pagNumber = Math.ceil(changes['itemsNum'].currentValue / 5);
    this.pagArray = Array.from({ length: this.pagNumber }, (value, index) => index + 1);
    this.currentPage = 1;
  }

  private pagNumber:number = 0; 
  
  private currentPage:number = 1;

  public pagArray:Array<number> = new Array();

  @Output()
  public currentPageEmit:EventEmitter<number> = new EventEmitter<number>();

  public ngOnInit(): void {
    
  }

  public btnHandler(btnValue:string){
    this.currentPage = (btnValue == "nxtBtn") ? ++this.currentPage : ((btnValue == "prvBtn") ? --this.currentPage : parseInt(btnValue));
    this.currentPage = (this.currentPage >= this.pagNumber) ? this.pagNumber : this.currentPage;
    this.currentPage = (this.currentPage <= 1) ? 1 : this.currentPage;
    this.currentPageEmit.emit(this.currentPage)
  }


}
