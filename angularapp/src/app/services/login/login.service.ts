import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users:any;
  url:string = "https://8080-afeccbdebfffbedeadcfdbdaabaca.examlyiopb.examly.io/users"
  
  constructor(private http:HttpClient){}

  getUsers() {
    return this.http.get(this.url);
  }

  login(email: any, password: any) {
    return this.http.get(this.url + "/?email=" + email + "&password=" + password)
  }
  addUser(data:any)
  {
      return this.http.post(this.url,data);
  }
}
