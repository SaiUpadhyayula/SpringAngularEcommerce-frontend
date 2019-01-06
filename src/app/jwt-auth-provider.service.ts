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
export class JwtAuthProviderService {

  constructor(private http: HttpClient, private $localStorage: LocalStorageService) { }

  login(loginPayload: LoginPayload): Observable<any> {
    return this.http.post<JwtAuthResponsePayload>('http://localhost:8080/api/auth/login', loginPayload).pipe(map(jwtResponse => {
      if(jwtResponse.accessToken){
        this.$localStorage.store('authenticationToken', jwtResponse.accessToken);
      }
    }));
  }
  
  logout(): Observable<any> {
    return new Observable(observer => {
      this.$localStorage.clear('authenticationToken');
      observer.complete();
    });
  }
}
