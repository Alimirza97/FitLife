import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productApiURL = "http://localhost:8081/product/";
  private _allProductsEP = "getAllProducts";

  public get productApiURL() {
    return this._productApiURL
  };
  public get allProductsEP() {
    return this._allProductsEP
  };

  constructor(private http:HttpClient) {
  }
  getProducts(){
    return this.http.get(this._productApiURL + this._allProductsEP)
  }
}
