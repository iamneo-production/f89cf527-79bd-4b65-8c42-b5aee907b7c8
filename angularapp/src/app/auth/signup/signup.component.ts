import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  users: any;
  constructor(private userService: LoginService, private router: Router,private snackBar:MatSnackBar) {
    userService.getUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data;
    }
    );
  }

  signupForm = new FormGroup(
    {
      firstname: new FormControl('', [Validators.required, Validators.pattern('[A-Z a-z]+$')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('[A-Z a-z]+$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.pattern('[A-Z a-z]+$')]),
      mobilenumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
      confirmpassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),


    });

 



  signUp(data: any) {

    console.log(data);

    if (this.signupForm.valid) {
      this.userService.addUser(data).subscribe(
        (data: any) => {
          console.log(data);
          this.snackBar.open('Customer successfully added!', '✅', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration:1500
          });
          this.signupForm.reset();
          this.router.navigate(['login'])
        }
      )
    }
  }

  get firstname()
  {
    return this.signupForm.get('firstname');
  }
  get lastname()
  {
    return this.signupForm.get('lastname');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get username() {
    return this.signupForm.get('username');
  }

  get mobilenumber() {
    return this.signupForm.get('mobilenumber');
  }

  get password() {
    return this.signupForm.get('password');
  }
  get confirmpassword() {
    return this.signupForm.get('confirmpassword');
  }

  ngOnInit(): void {
  }

  navigateLogin() {
    this.router.navigate(['login'])
  }
}
