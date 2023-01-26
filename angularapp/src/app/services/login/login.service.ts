import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users:any;
  url:string = "https://8080-cafcfccaceabeffbedeadcfdbdaabaca.examlyiopb.examly.io/users"
  usersUrl:string = "https://8080-adddbbadcceecfffbedeadcfdbdaabaca.examlyiopb.examly.io/users"
  

  constructor(private http:HttpClient){}

  getUsers() {
    return this.http.get(this.usersUrl);
  }

  login(email: any, password: any) {
    return this.http.get(this.usersUrl + "/?email=" + email + "&password=" + password)
  }
  addUser(data:any)
  {
      return this.http.post(this.url,data);
  }
}
