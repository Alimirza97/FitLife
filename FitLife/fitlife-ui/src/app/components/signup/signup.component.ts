import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SingUpService} from "../../services/singUp/sing-up.service";
import {UserRegisterModel} from "../../models/userRegister.model";
import {HomeService} from "../../services/home/home.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'Sign Up Page - Welcome';
  _signupForm!: FormGroup;

  private userRegisterModel:UserRegisterModel = new UserRegisterModel();

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              private userRegisterService: SingUpService,
              private homeService: HomeService,
              ) {

  }

  ngOnInit(): void {
    this._createForm();

  }

  _createForm() {
    this._signupForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      age: ['',Validators.required],
      weight: ['',Validators.required],
      length: ['',Validators.required],
      gender: ['']
    });

  }
  setModel()
  {
    this.userRegisterModel.username = this._signupForm.value.username;
    this.userRegisterModel.password = this._signupForm.value.password;
    this.userRegisterModel.firstName = this._signupForm.value.firstName;
    this.userRegisterModel.lastName = this._signupForm.value.lastName;
    this.userRegisterModel.email = this._signupForm.value.email;
    this.userRegisterModel.age = this._signupForm.value.age;
    this.userRegisterModel.length = this._signupForm.value.length;
    this.userRegisterModel.weight = this._signupForm.value.weight;
    this.userRegisterModel.gender = this._signupForm.value.gender;
  }
  signUp(){
    if (this._signupForm.valid){
      this.setModel();
      this.userRegisterService.register(this.userRegisterModel).subscribe({
        next: response => {
          if(response != null)
          {
            //this.homeService.getUserModel = response;
            this._router.navigate(['']);
          }
          //console.log(this.homeService.getUserModel);
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
      this._router.navigate(['/home']);
    }else {
      alert("Please fill all the fields to register")
    }
  }


}
