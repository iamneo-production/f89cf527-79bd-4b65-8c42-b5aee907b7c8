import { Component, OnInit } from '@angular/core';
import { UserDisplayService } from '../services/user-display.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any = JSON.parse(localStorage.getItem('loggedUser'));
  constructor(private userdata:UserDisplayService)
  {
 
  }


  ngOnInit(): void {
  }

}
