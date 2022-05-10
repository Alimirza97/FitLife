import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {getUserModel} from "../../models/getUser.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userApiURL = "http://localhost:8081/user/";
  private _getUserEP = "getUser";

  public get userApiURL() {
    return this._userApiURL
  };

  constructor(private http:HttpClient) { }

  getUser(userModel:getUserModel){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json')
    return this.http.post(this._userApiURL + this._getUserEP, userModel, {headers: httpHeaders});
  }
}
