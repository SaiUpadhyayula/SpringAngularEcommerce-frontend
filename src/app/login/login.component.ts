import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { LoginPayload } from '../login-payload';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload: LoginPayload;
  isError: boolean;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) {
    this.loginPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });    
  }

  login() {
    this.authenticationService.login(this.loginPayload).toPromise().then((result) => {
      if (result) {
        this.isError = false;
      } else {
        this.isError = true;
      }
    }, () => {
      this.isError = true;
    });
  }
}
