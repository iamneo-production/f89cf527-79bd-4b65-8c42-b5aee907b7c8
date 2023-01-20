import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = "https://8080-ebffcadbcbffbedeadcfdbdaabaca.examlyiopb.examly.io/users";

  

  constructor(private http:HttpClient) { }

  users()
  {

    return this.http.get(this.url);
  }

  deleteUsers(data:any)
  {

    return this.http.delete(this.url+"/"+data.id);
  }

}



 

 
