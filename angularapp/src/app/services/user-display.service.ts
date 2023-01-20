import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDisplayService {

  url="http://localhost:3000/users";
  constructor(private ht:HttpClient) { }

  users()
  {
    return this.ht.get(this.url);
  }
}
