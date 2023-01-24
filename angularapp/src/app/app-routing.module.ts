import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [

  {
    path:'',
    component:HomepageComponent,
    canActivate:[AuthGuardGuard]
  },
  
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'sign-up',
    component: SignupComponent
  },
  {
    path:'products',
    component:ViewProductComponent
  },
  {
    path:'orders',
    component:ViewOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
