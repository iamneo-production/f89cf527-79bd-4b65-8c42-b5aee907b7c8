import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  let loggedUser: any = null;
    let s = localStorage.getItem('loggedUser');
    if (s != null)
      loggedUser = JSON.parse(localStorage.getItem('loggedUser') || "{'loggedUser':null}");


    if (loggedUser.role == 'admin') {
      return true;
    }

    this.router.navigate(['home'])
    return false;
  }
  
}
