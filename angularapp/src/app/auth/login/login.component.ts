import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedUser: any;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    console.log("OnInit");

  }


  loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),

    }
  )

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  loginUser(loginForm: any) {

    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (next: any) => {
          this.loggedUser = next[0];

          console.log(next)

          if (this.loggedUser != undefined) {

            localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
            let user: any = JSON.parse(localStorage.getItem('loggedUser'));
            localStorage.setItem('role', user.role);

            if (user.role == "admin")
              this.router.navigate(['admin']);
            else
              this.router.navigate(['home']);


          } else {
            alert('Authentication failed')
          }
        }
      )
  }

  signUp(){
    this.router.navigate(['sign-up'])
  }


}


