import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdmin:boolean = false;
  loggedIn:boolean = false;

  constructor(private router:Router){

    let s = localStorage.getItem('loggedUser');
    if(s != null){
      this.isAdmin = JSON.parse(s).role == "admin" ? true : false;
      this.loggedIn = true;
    }
     
    console.log(s);
    
  }
  

  logOut(){
    localStorage.clear()
    this.router.navigate(['login'])
   // window.location.reload();
  }
}
