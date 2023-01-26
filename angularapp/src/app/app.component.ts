import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewProductService } from './services/view-product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:any;
<<<<<<< HEAD

  
  isAdmin:boolean = false;
  loggedIn:boolean = false;

=======

  
  // isAdmin:boolean = false;
  // loggedIn:boolean = false;

>>>>>>> 86893bcee15d306a190eab5e3620c337a5a9a668
  constructor(private router:Router,private viewproductService:ViewProductService){
    viewproductService.products().subscribe((data:any)=>
    {
      console.log(data);
      this.products=data;
    });
<<<<<<< HEAD
  
  //   let s = localStorage.getItem('loggedUser');
  //   if(s != null){
  //     this.isAdmin = JSON.parse(s).role == "admin" ? true : false;
  //     this.loggedIn = true;
  //   }
     
  //   console.log(s);
  // }
 
=======
  }
//     let s = localStorage.getItem('loggedUser');
//     if(s != null){
//       this.isAdmin = JSON.parse(s).role == "admin" ? true : false;
//       this.loggedIn = true;
//     }
     
//     console.log(s);
    
//  }
>>>>>>> 86893bcee15d306a190eab5e3620c337a5a9a668
  
  }
  logOut(){
    localStorage.clear()
    this.router.navigate(['login'])
  //Might have to comment
    // window.location.reload();
  }
  }


