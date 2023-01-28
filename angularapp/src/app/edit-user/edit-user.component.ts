import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: any;
  userId:any;

  editForm = new FormGroup(
    {
      id: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobilenumber: new FormControl('', [Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required])
    }
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router:Router
    ) { 

      
    }

  ngOnInit(): void {

    this.setUser();

  }

  setUser() {

    this.editForm.get('id')!.setValue(this.data.id);
    this.editForm.get('username')!.setValue(this.data.username);
    this.editForm.get('email')!.setValue(this.data.email);
    this.editForm.get('mobilenumber')!.setValue(this.data.mobilenumber);
    this.editForm.get('password')!.setValue(this.data.password);

  }

  editUser(data: any) {
    console.log(data.value);
    if (confirm("Are you sure you want to submit changes?")) {
      if (this.editForm.valid) {
        this.userService.editUser(data.value).subscribe(
          (data: any) => {
            console.log(data);
            alert("User successfully updated")
            this.router.navigate(['users'])
          });
      } else {
        alert("Invalid form, user edit failed");
      }
    }
  }

}
