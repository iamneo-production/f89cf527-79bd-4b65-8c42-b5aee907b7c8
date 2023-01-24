import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
   
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
