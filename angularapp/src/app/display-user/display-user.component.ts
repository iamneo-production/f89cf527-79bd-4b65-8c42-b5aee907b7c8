import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { UserDisplayService } from '../services/user-display.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent {
users:any;
searchText:any;
  constructor(private userdata:UserDisplayService, public dialog: MatDialog)
  {
    userdata.users().subscribe((data:any)=>
    {
      console.log(data);
      this.users=data;
    });
  }

  editUser(data:any){
    const dialogRef = this.dialog.open(EditUserComponent,{data:data});

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      
    });
  }

  

}
