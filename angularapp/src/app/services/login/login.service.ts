import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usersUrl:string = "https://8080-adddbbadcceecfffbedeadcfdbdaabaca.examlyiopb.examly.io/users"
  

  constructor(private http:HttpClient){}

  getUsers() {
    return this.http.get(this.usersUrl);
  }

  login(username: any, password: any) {
    return this.http.get(this.usersUrl + "/?username=" + username + "&password=" + password)
  }
}
