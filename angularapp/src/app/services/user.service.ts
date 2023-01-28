import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = "https://8080-adddbbadcceecfffbedeadcfdbdaabaca.examlyiopb.examly.io/users";

  

  constructor(private http:HttpClient) { }

  getUsers()
  {

    return this.http.get(this.url);
  }

  editUser(data: any) {
    return this.http.put(this.url + "/" + data.id, data)
  }

  deleteUsers(data:any)
  {

    return this.http.delete(this.url+"/"+data.id);
  }

}



 

 
