import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login/login.service";
import {getUserModel} from "../../models/getUser.model";
import {UserLoginModel} from "../../models/userLogin.model";
import {HomeService} from "../../services/home/home.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login Page - Welcome';
  store:any;

  private loginModel: UserLoginModel = new UserLoginModel();

  _loginForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              private userLoginService: LoginService,
              private homeService: HomeService
              ) {
  }

  ngOnInit(): void {
    this._createForm();
  }

  _createForm(){
    this._loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn(){
    if (this._loginForm.valid){
      console.log(this._loginForm.value.password)
      console.log(this._loginForm.value.username)
      this.loginModel.username = this._loginForm.value.username;
      this.loginModel.password = this._loginForm.value.password;
      this.userLoginService.login(this.loginModel).subscribe({
        next: response => {
          if(response != null)
          {
            this.homeService.setModel(<getUserModel>response);
            this.homeService.convertModelToString();
            this.homeService.setStorage("auth", this.homeService.getData());
            //this.homeService.setModel(<getUserModel>response);
            //sessionStorage.setItem("auth", "aa");
            this.store = sessionStorage.getItem("auth")
            console.log(this.store);
            this._router.navigate(['home']);
          }
          console.log(this.homeService.getModel());

        },
        error: error => {
          console.error('There was an error!', error);
        }
      })

    }else {
      alert("Please fill all the fields to login")
    }
  }
  account(){
    this._router.navigate(['/signup']);
  }


}
