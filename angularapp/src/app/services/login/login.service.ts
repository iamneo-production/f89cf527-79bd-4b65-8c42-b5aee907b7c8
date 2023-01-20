import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = "https://8080-cafcfccaceabeffbedeadcfdbdaabaca.examlyiopb.examly.io/users"

  constructor(private http:HttpClient){}

  getUsers() {
    return this.http.get(this.url);
  }
}
