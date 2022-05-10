import {Component, EventEmitter, OnInit, Output} from '@angular/core';import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product/product.service";
import {ProductItemModel} from "../../models/productItem.model";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  productList:any = [{ id: "deneme1",
    name: "elma",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
    cal: 56,
    carb: 13,
    fat: 2,
    pro: 1
  },{id: "deneme2",
    name: "armut",
    imageURL: "https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27020005/27020005-d69d93-1650x1650.jpg",
    cal: 40,
    carb: 11,
    fat: 5,
    pro: 3},{id: "deneme2",
    name: "armut",
    imageURL: "https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27020005/27020005-d69d93-1650x1650.jpg",
    cal: 40,
    carb: 11,
    fat: 5,
    pro: 3},{id: "deneme2",
    name: "armut",
    imageURL: "https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27020005/27020005-d69d93-1650x1650.jpg",
    cal: 40,
    carb: 11,
    fat: 5,
    pro: 3},{id: "deneme2",
    name: "armut",
    imageURL: "https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27020005/27020005-d69d93-1650x1650.jpg",
    cal: 40,
    carb: 11,
    fat: 5,
    pro: 3},{id: "deneme2",
    name: "armut",
    imageURL: "https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27020005/27020005-d69d93-1650x1650.jpg",
    cal: 40,
    carb: 11,
    fat: 5,
    pro: 3},{id: "deneme2",
    name: "armut",
    imageURL: "https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27020005/27020005-d69d93-1650x1650.jpg",
    cal: 40,
    carb: 11,
    fat: 5,
    pro: 3},{id: "deneme2",
    name: "armut",
    imageURL: "https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27020005/27020005-d69d93-1650x1650.jpg",
    cal: 40,
    carb: 11,
    fat: 5,
    pro: 3}];

  productItem!: ProductItemModel;

  @Output() event = new EventEmitter<ProductItemModel>();

  receiveMessage($event:ProductItemModel)
  {
    this.productItem = $event;
    this.event.emit(this.productItem);
  }


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    //console.log(this.productListNew);
  }

  getProducts(){
    this.productService.getProducts().subscribe(response =>{
      console.log(response);
      this.productList = response;
      }
    )
  }

}


