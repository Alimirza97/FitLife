import {Component, Input, OnInit} from '@angular/core';
import {ProductItemModel} from "../../models/productItem.model";

@Component({
  selector: 'app-product-calculator',
  templateUrl: './product-calculator.component.html',
  styleUrls: ['./product-calculator.component.css']
})
export class ProductCalculatorComponent implements OnInit {

  @Input() productList!: ProductItemModel[];

  @Input() productTotalCal: number = 0;
  @Input() productTotalPro: number = 0;
  @Input() productTotalFat: number = 0;
  @Input() productTotalCarb: number = 0;
  //productList: Array<ProductItemModel> = [];
  //productList: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.productList.length)
    /*
    if (this.productItem instanceof ProductItemModel) {
      this.productList.push(this.productItem);
    }
    */
  }

}
