import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from "../../services/home/home.service";
import {Router} from "@angular/router";
import {ProductItemModel} from "../../models/productItem.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService, private router: Router) { }

  productItemModels:ProductItemModel[] = [];

  productTotalCal: number = 0;
  productTotalPro: number = 0;
  productTotalFat: number = 0;
  productTotalCarb: number = 0;

  receiveMessage($event:ProductItemModel)
  {
    this.productTotalCal = 0;
    this.productTotalPro = 0;
    this.productTotalFat = 0;
    this.productTotalCarb = 0;
    let flag = true;
    if(this.productItemModels.length != 0) {
      for (let i = 0; i < this.productItemModels.length; i++) {
        if (this.productItemModels[i].id == $event.id) {
          this.productItemModels[i].cal += $event.cal;
          this.productItemModels[i].pro += $event.pro;
          this.productItemModels[i].fat += $event.fat;
          this.productItemModels[i].carb += $event.carb;
          flag = false;
        }
      }
      if (flag) {
        this.productItemModels.push($event);
      }
    }
    else
      this.productItemModels.push($event);

    this.productItemModels.forEach(data =>{
      this.productTotalCal += data.cal;
      this.productTotalCarb += data.carb;
      this.productTotalPro += data.pro;
      this.productTotalFat += data.fat;
    });
  }

  ngOnInit(): void {
    /*
    if(this.homeService.getModel() != null) {
      if ((this.homeService.getModel().username == null || this.homeService.getModel().username == '') && (this.homeService.getModel().id == null || this.homeService.getModel().id == '')) {
        this.router.navigate(['login']);
      }
      this.router.navigate(['login']);
    }

     */
    if ((this.homeService.getModel().username == null || this.homeService.getModel().username == '') && (this.homeService.getModel().id == null || this.homeService.getModel().id == '')) {
      this.router.navigate(['login']);
    }
  }

}
