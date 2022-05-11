import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input()  prodObj:any = {};
  @Output() onProdRemoved = new EventEmitter<number>();
  constructor() { }

  public remove(PId: number)
  {
  // event emitting
    this.onProdRemoved.emit(PId);
  }
  ngOnInit(): void {
  }

}
