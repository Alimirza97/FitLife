import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {addedProductModel} from "../../models/addedProductModel";
import {AddProductToDBService} from "../../services/addProductToDB/add-product-to-db.service"

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.css']
})
export class AddProductPageComponent implements OnInit {
  title = 'Add A New Product For FitLife Community';
  _addProductForm!: FormGroup;

  private productToBeAdded:addedProductModel = new addedProductModel();



  constructor(private _formBuilder: FormBuilder,private _router: Router,private addProductService: AddProductToDBService,) {
  }

  ngOnInit(): void {
    this._createForm();
  }

  _createForm() {
    this._addProductForm = this._formBuilder.group({
      name: ['', Validators.required],
      imageURL: ['', Validators.required],
      cal: ['', Validators.required],
      carb: ['', Validators.required],
      fat: ['', Validators.required],
      pro: ['', Validators.required]
    });
  }

  createProductObject()
  {
    this.productToBeAdded.name = this._addProductForm.value.name;
    this.productToBeAdded.imageURL = this._addProductForm.value.imageURL;
    this.productToBeAdded.cal = this._addProductForm.value.cal;
    this.productToBeAdded.carb = this._addProductForm.value.carb;
    this.productToBeAdded.fat = this._addProductForm.value.fat;
    this.productToBeAdded.pro = this._addProductForm.value.pro;
  }

  addProduct(){
    if (this._addProductForm.valid){
      this.createProductObject()
      this.addProductService.addProductToDB(this.productToBeAdded).subscribe({
        next: response => {
          if(response != null) {
            this._router.navigate(['']);
          }
        },
        error: error => {
          alert('There was an error!')
        }
      })
    }else {
      alert("Please fill all the field of the product you want to add")
    }
  }





}

