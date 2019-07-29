import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { RegisterPayload } from '../register-payload';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerPayload: RegisterPayload;
  isError: boolean;
  errorMessage: String;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.registerPayload = {
      email: '',
      username: '',
      name: '',
      password: '',
      confirmPassword: ''
    };
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  register() {
    this.authenticationService.register(this.registerPayload).toPromise().then((result) => {
      if (result.status === 200) {
        this.isError = false;        
        this.router.navigateByUrl('/login');
      } else {
        this.isError = true;
        this.errorMessage = result.message;        
      }
    },()=>{
      this.isError = true;
    })
  }

}
