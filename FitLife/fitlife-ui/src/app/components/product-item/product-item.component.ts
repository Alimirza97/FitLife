import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ProductItemModel } from "../../models/productItem.model";
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: ProductItemModel;

  @Output() event = new EventEmitter<ProductItemModel>();

  sentProduct()
  {
    this.event.emit(this.productItem);
  }


  constructor() { }

  ngOnInit(): void {
  }
}
