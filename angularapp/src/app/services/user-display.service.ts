import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDisplayService {

  url="https://8080-adddbbadcceecfffbedeadcfdbdaabaca.examlyiopb.examly.io/users";
  constructor(private ht:HttpClient) { }

  users()
  {
    return this.ht.get(this.url);
  }
}
