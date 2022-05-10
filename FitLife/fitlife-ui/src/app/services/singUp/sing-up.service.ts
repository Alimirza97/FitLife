import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserRegisterModel} from "../../models/userRegister.model";

@Injectable({
  providedIn: 'root'
})
export class SingUpService {
  private _userRegisterApiURL = "http://localhost:8081/user/";
  private _getUserRegisterEP = "register";

  public get userRegisterApiURL() {
    return this._userRegisterApiURL
  };
  constructor(private http:HttpClient) { }

  register(userRegisterModel: UserRegisterModel)
  {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json')
    return this.http.post(this._userRegisterApiURL + this._getUserRegisterEP, userRegisterModel, {headers: httpHeaders});
  }
}
