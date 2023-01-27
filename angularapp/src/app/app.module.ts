import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchComponent } from './search/search.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    DisplayUserComponent,
    SignupComponent,
    ViewProductComponent,
    HomepageComponent,
    AddOrderComponent,
    ViewOrderComponent,
    DeleteOrderComponent,
    EditOrderComponent,
    AddCartComponent,
    ViewCartComponent,
    DashboardComponent,
    AdminhomepageComponent,
    EditUserComponent,
    CustomerOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatButtonModule,MatToolbarModule,MatCardModule,MatIconModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
