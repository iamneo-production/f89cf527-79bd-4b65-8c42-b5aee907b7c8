import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {


  users:any;
  constructor(private userdata: UserService) { }

  ngOnInit(): void {

    this.getUsers();
  }

  getUsers()
  {
    this.userdata.getUsers().subscribe((data:any)=> 
   
  {
     const user = data.find((u:any) => u.username == 'chavinco')

      console.log(data);
      this.users=user;
  
    });
  }
 
  DeleteUser(data:any)
  {
 
   this.userdata.deleteUsers(data).subscribe((result:any)=>
   
   {
 
     console.log(result);
     this.getUsers();
   });

}
}



  