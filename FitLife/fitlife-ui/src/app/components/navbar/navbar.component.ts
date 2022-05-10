import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../services/home/home.service";
import {getUserModel} from "../../models/getUser.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username:string = "";

  constructor(private homeService: HomeService,
              private router: Router
              ) { }

  ngOnInit(): void {
    if(this.homeService.getModel() != null)
      this.username = this.homeService.getModel().username;
  }

  signOut()
  {
    this.homeService.setModel(null);
    this.router.navigate(['home'])

  }
  addProductButton()
  {
    this.router.navigate(['addNewProduct'])
  }

}
