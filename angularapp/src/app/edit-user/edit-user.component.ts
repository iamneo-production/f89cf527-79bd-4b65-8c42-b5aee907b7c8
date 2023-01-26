import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router:Router
    ) { 

      activatedRoute.params.subscribe(
        ()=>{
          this.userId = this.activatedRoute.snapshot.paramMap.get('id');
          console.log(this.userId);
      
          this.getUser();
        }
      )
    }

  ngOnInit(): void {

  
  }

  getUser() {
    this.userService.getUsers().subscribe(
      (data: any) => {

        this.user = data.find((resuser: any) => resuser.id == this.userId);

        this.editForm.get('id')!.setValue(this.user.id);
        this.editForm.get('username')!.setValue(this.user.username);
        this.editForm.get('email')!.setValue(this.user.email);
        this.editForm.get('mobilenumber')!.setValue(this.user.mobilenumber);
        this.editForm.get('password')!.setValue(this.user.password);
      }
    );
  }

  editUser(data: any) {
    console.log(data.value);
    if (confirm("Are you sure you want to submit changes?")) {
      if (this.editForm.valid) {
        this.userService.editUser(data.value).subscribe(
          (data: any) => {
            console.log(data);
            alert("User successfully udated")
            this.getUser();
            this.router.navigate(['users'])
          });
      } else {
        alert("Invalid form, user edit failed");
      }
    }

  }

}
