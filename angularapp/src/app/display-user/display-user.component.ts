import { Component, OnInit } from '@angular/core';
import { UserDisplayService } from '../services/user-display.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent {
users:any;
searchText:any;
  constructor(private userdata:UserDisplayService)
  {
    userdata.users().subscribe((data:any)=>
    {
      console.log(data);
      this.users=data;
    });
  }

  

}
