import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'bs-header',
  templateUrl: './bs-header.component.html',
  styleUrls: ['./bs-header.component.css']
})
export class BsHeaderComponent implements OnInit {

  userAccount: string;
  showLoginButton: boolean;

  constructor(private authenticationService: AuthenticationService) {
    this.setUserName();
  }

  ngOnInit() {
  }

  private setUserName() {
    if(this.authenticationService.getUserName() != null){
        this.userAccount = this.authenticationService.getUserName();
        this.showLoginButton = false;      
    } else {
        this.showLoginButton = true;
    }
  }
}
