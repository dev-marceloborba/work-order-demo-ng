import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import AuthenticationModel from '../models/authentication.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  private url = 'http://localhost:5114';
  private authenticatedUser?: AuthenticationModel;

  auth(userName: string, password: string) {
    return this.httpClient.post<AuthenticationModel>(
      `${this.url}/api/v1/login`,
      {
        userName,
        password,
      }
    );
  }
  login(token: string, expiration: string) {
    this.authenticatedUser = {
      token,
      expiration,
    };
    localStorage.setItem('data', JSON.stringify(this.authenticatedUser));
  }

  logout() {
    this.authenticatedUser = undefined;
    localStorage.removeItem('data');
  }
  isLogged() {
    return this.authenticatedUser!!;
  }
  retrieveFromLocalStorage() {
    const loggedUser = localStorage.getItem('data');
    if (loggedUser != null) {
      this.authenticatedUser = JSON.parse(loggedUser) as AuthenticationModel;
    }
  }
}
