import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  {
    path:'',
    component:HomepageComponent,
    canActivate:[AuthGuardGuard],
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:'carts',
        component:ViewCartComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:'orders',
        component:ViewOrderComponent,
        canActivate:[AuthGuardGuard]
      },
    ]
  },
  
  {
    path:'admin-home',
    component:AdminhomepageComponent,
    canActivate:[AuthGuardGuard],
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
        canActivate:[AuthGuardGuard],
        children:[
          {
            path:'product-info',
            component:ProductInfoComponent
          }
        ]
      },
      {
        path:'products',
        component:ViewProductComponent,
        
      },
      {
        path:'**',
        component:LoginComponent
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
