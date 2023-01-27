import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {


  @Input() user:any = {};

  constructor(private userdata: UserService) { }

  ngOnInit(): void {

   
  }


 
  DeleteUser()
  {
 
   this.userdata.deleteUsers(this.user).subscribe((result:any)=>
   
   {
 
     console.log(result);
     
   });

}
}



  