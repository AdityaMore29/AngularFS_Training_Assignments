import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.css']
})
export class SortOptionsComponent implements OnInit {

  @Output()
  onSorting:EventEmitter<string> = new EventEmitter();
sortingopt:string="";

  // Sort_change()
  // {
  //  // alert(this.strLocation);
    
  // }

  sortdata (sortopt:string){    
this.sortingopt=sortopt;
this.onSorting.emit(this.sortingopt);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
