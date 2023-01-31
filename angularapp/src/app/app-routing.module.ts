import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: localStorage.getItem('role') == 'admin'
      ? 'admin' : 'home',
    pathMatch: 'full',

  },
  {
    path:'home',
    component:HomepageComponent,
    canActivate:[AuthGuardGuard],
    children:[
      {
        path:'',
        component:DashboardComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:'product-info',
        component:ProductInfoComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:'cart',
        component:ViewCartComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:'checkout',
        component:CheckoutComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:'orders',
        component:CustomerOrderComponent,
        canActivate:[AuthGuardGuard]
      },
    ]
  },
  
  {
    path:'admin',
    component:AdminhomepageComponent,
    canActivate:[AuthGuardGuard,AdminGuard],
    children:[
      {
        path:'',
        component:DashboardComponent,
        canActivate:[AuthGuardGuard],
      },
      {
        path:'product-info',
        component:ProductInfoComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:'products',
        component:ViewProductComponent,
        canActivate:[AuthGuardGuard, AdminGuard]
      },
      {
        path:'orders',
        component:ViewOrderComponent,
        canActivate:[AuthGuardGuard, AdminGuard]
      },
      {
        path:'users',
        component:DisplayUserComponent,
        canActivate:[AuthGuardGuard, AdminGuard]
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'sign-up',
    component: SignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
