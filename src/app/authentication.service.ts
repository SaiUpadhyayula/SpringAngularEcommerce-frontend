import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtAuthProviderService } from './jwt-auth-provider.service';
import { LoginPayload } from './login-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authenticated = false;

  constructor(private authProvider: JwtAuthProviderService) {
  }

  login(loginPayload: LoginPayload): Observable<any> {    
      return this.authProvider.login(loginPayload);
  }

  identity(value: boolean) {
    this.authenticated = true;
  }

  logout(){
    this.authProvider.logout().subscribe();
    this.authenticated = false;
  }
}
