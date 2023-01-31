import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ViewCartService {

  url = "https://8080-adddbbadcceecfffbedeadcfdbdaabaca.examlyiopb.examly.io/carts"

  constructor(private http:HttpClient, private router:Router) { 

  }

  getCart(){
    return this.http.get(this.url)
    let user = JSON.parse(localStorage.getItem("loggedUser"));
    return this.http.get(this.url+"/?userId="+user.id)
  }

}
