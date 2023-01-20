import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }


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

    const formEmail = loginForm.value.email;
    const formPassword = loginForm.value.password;

    this.loginService.getUsers().subscribe(
      (dbusers: any) => {
        const user = dbusers.find((u: any) => (u.email == formEmail && u.password == formPassword))

        if (user) {
          alert("logged in")
          this.router.navigate(['dashboard'])
        } else {
          alert("Login failed")
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
