import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../models/user.model";
import {getUserModel} from "../../models/getUser.model";
import {UserService} from "../../services/user/user.service";
import {HomeService} from "../../services/home/home.service";

@Component({
  selector: 'app-new-sidebar',
  templateUrl: 'new-sidebar.component.html',
  styleUrls: ['new-sidebar.component.css']
})
export class NewSidebarComponent implements OnInit {

  public userModel:any = new UserModel();
  private getUserModel:getUserModel = new getUserModel();

  constructor(private userService: UserService,
              private homeService: HomeService
              ) { }

  ngOnInit(): void {
    this.getUser();
    console.log("Hello");
  }
  getUser(){
    console.log(this.homeService.getModel());

    this.userService.getUser(this.homeService.getModel()).subscribe({
      next: response => {
        if(response != null)
        {
          this.userModel = response;
        }
        console.log(this.userModel);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }

}
