import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {addedProductModel} from "../../models/addedProductModel";

@Injectable({
  providedIn: 'root'
})
export class AddProductToDBService {
  private _addProductApiURL = "http://localhost:8081/product/addProduct";

  public get userLoginApiURL() {
    return this._addProductApiURL;
  };

  constructor(private http:HttpClient) { }

  addProductToDB(productToBeAdded: addedProductModel)
  {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json')
    return this.http.post(this._addProductApiURL, productToBeAdded, {headers: httpHeaders});
  }
}




