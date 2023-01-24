import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import { DeleteUserComponent } from './delete-user/delete-user.component';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchComponent } from './search/search.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddReviewComponent } from './add-review/add-review.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeleteUserComponent,
    SearchComponent,
    DisplayUserComponent,
    SignupComponent,
    ViewProductComponent,
    HomepageComponent,
    AddReviewComponent
   
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
    FormsModule,
    MatButtonModule,MatToolbarModule,MatCardModule, BrowserAnimationsModule, NgbRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
