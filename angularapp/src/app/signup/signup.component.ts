import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  users:any;
  constructor (private userService:LoginService)
  {
    userService.getUsers().subscribe((data:any)=>
    {
      console.log(data);
      this.users=data;
    }
  );
  }

  signupForm=new FormGroup(
    {
      email:new FormControl('',[Validators.required,Validators.email]),
      username:new FormControl('',[Validators.required,Validators.pattern('[A-Z a-z]+$')]),
      mobilenumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]),
      confirmpassword:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]),
    
      
    });

    signUp(data:any){

      console.log(data);
      
      if(this.signupForm.valid){
        this.userService.addUser(data).subscribe(
          (data:any) => {
            console.log(data);
            this.signupForm.reset();
          }
        )
      }
    }

  get email()
  {
    return this.signupForm.get('email');
  }
  get username()
  {
    return this.signupForm.get('username');
  }

  get mobilenumber()
  {
    return this.signupForm.get('mobilenumber');
  }

  get password()
  {
    return this.signupForm.get('password');
  }
  get confirmpassword()
  {
    return this.signupForm.get('confirmpassword');
  }

  ngOnInit(): void {
  }

}
