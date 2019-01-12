import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginPayload } from './login-payload';
import { JwtAuthResponsePayload } from './payload/authentication-response.payload';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {  
  constructor(private http: HttpClient, private $localStorage: LocalStorageService) { }

  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.http.post<JwtAuthResponsePayload>('http://localhost:8080/api/auth/login', loginPayload).pipe(map(data => {
      this.$localStorage.store('authenticationToken', data.accessToken);
      this.$localStorage.store('user', data.username);
      return true;
    }));
  }
  
  logout(): Observable<any> {
    return new Observable(observer => {
      this.$localStorage.clear('authenticationToken');
      this.$localStorage.clear('user');
      observer.complete();
    });
  }

  getUserName(): string{
    return this.$localStorage.retrieve('user');
  }
}
