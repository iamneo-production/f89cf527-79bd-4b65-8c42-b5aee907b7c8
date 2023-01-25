import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
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
        path:'cart',
        component:ViewCartComponent
      }
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
        canActivate:[AuthGuardGuard]
      },
      {
        path:'products',
        component:ViewProductComponent
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
