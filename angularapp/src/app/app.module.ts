import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchComponent } from './search/search.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { ViewReviewComponent } from './view-review/view-review.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { EditCartComponent } from './edit-cart/edit-cart.component';
import { DeleteCartComponent } from './delete-cart/delete-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteReviewComponent } from './delete-review/delete-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductInfoComponent } from './product-info/product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeleteUserComponent,
    SearchComponent,
    DisplayUserComponent,
    SignupComponent,
    ViewProductComponent,
    AddProductComponent,
    DeleteProductComponent,
    HomepageComponent,
    AddReviewComponent,
    ViewReviewComponent,
    AddOrderComponent,
    ViewOrderComponent,
    DeleteOrderComponent,
    EditOrderComponent,
    AddCartComponent,
    ViewCartComponent,
    EditCartComponent,
    DeleteCartComponent,
    CheckoutComponent,
    DashboardComponent,
    AdminhomepageComponent,
    EditUserComponent,
    DeleteReviewComponent,
    EditReviewComponent,
    ProductReviewComponent,
    CustomerOrderComponent,
    CheckoutComponent,
    DeleteCartComponent,
    DeleteUserComponent,
    EditProductComponent,
    ProductReviewComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    MatButtonModule,MatToolbarModule,MatCardModule, BrowserAnimationsModule, NgbRatingModule, MatCardModule,
    Ng2SearchPipeModule, MatFormFieldModule,
    MatButtonModule,MatToolbarModule,MatCardModule,MatIconModule, BrowserAnimationsModule, NgbRatingModule, 
    Ng2SearchPipeModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule, 
    BrowserAnimationsModule,
    MatDialogModule, MatInputModule,
    MatButtonModule,MatToolbarModule,MatCardModule,MatIconModule, BrowserAnimationsModule,MatDialogModule,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
