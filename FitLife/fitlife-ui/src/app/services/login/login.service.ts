import { Injectable } from '@angular/core';
import {getUserModel} from "../../models/getUser.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserLoginModel} from "../../models/userLogin.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _userLoginApiURL = "http://localhost:8081/user/";
  private _getUserLoginEP = "login";

  public get userLoginApiURL() {
    return this._userLoginApiURL
  };

  constructor(private http:HttpClient) { }

  login(userLoginModel: UserLoginModel)
  {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json')
    return this.http.post(this._userLoginApiURL + this._getUserLoginEP, userLoginModel, {headers: httpHeaders});
  }
}
