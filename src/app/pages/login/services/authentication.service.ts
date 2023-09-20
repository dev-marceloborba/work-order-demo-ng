import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}
  private url = 'http://localhost:5114';

  auth(userName: string, password: string) {
    return this.httpClient.post(`${this.url}/api/v1/login`, {
      userName,
      password,
    });
  }
}
