import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {


  @Input() user:any = {};

  constructor(private userdata: UserService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {

   
  }


 
  DeleteUser()
  {
 
   this.userdata.deleteUsers(this.user).subscribe((result:any)=>
   
   {
 
     console.log(result);
     this.snackBar.open('User deleted', '✅', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration:1500
    });
     location.reload()
     
   });

}
}



  