import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchComponent } from './search/search.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';


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
    DeleteOrderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    NgbModule,
    MatButtonModule,MatToolbarModule,MatCardModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
