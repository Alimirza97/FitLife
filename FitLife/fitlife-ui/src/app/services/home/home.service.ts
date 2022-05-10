import { Injectable } from '@angular/core';
import {getUserModel} from "../../models/getUser.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private model: getUserModel = new getUserModel();
  private data: string = "";

  getData()
  {
    return this.data;
  }

  getModel()
  {
    return this.model;
  }
  setModel(model: any)
  {
    this.model = model;
  }

  constructor() { }

  convertModelToString()
  {
    this.data = this.model.id + "/" + this.model.username;
  }
  convertStringToModel()
  {
    const list = this.data.split("/");
    this.model.id = list[0];
    this.model.username = list[1];
  }

  setStorage(key:string, value:string)
  {
    sessionStorage.setItem(key, value);
  }
  getStorage(key:string)
  {
      this.data = sessionStorage.getItem(key) ?? "";
  }
}
