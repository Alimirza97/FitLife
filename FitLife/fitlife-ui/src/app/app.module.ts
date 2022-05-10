import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NewSidebarComponent} from "./components/new-sidebar/new-sidebar.component";
import { SignupComponent } from './components/signup/signup.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./components/login/login.component";
import { HomeComponent } from './components/home/home.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import { AddProductPageComponent } from './components/add-product-page/add-product-page.component';
import {ProductCalculatorComponent} from "./components/product-calculator/product-calculator.component";


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'allProducts',
    component: ProductListComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'new-sidebar',
    component: NewSidebarComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'addNewProduct',
    component: AddProductPageComponent
  }

];
@NgModule({
  declarations: [
    AppComponent,
    NewSidebarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ProductItemComponent,
    ProductListComponent,
    AddProductPageComponent,
    ProductCalculatorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

{
  info: []
}
