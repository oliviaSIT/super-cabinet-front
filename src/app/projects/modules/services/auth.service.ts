import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import {Http, URLSearchParams} from '@angular/http';
import {map} from 'rxjs/operators';

import { AppConfig } from './app.config';

@Injectable()
export class AuthService {

  private API_URL = AppConfig.API_URL;
  loggedIn: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: Http) {
  }

  checklogin(): Observable<any> {
    return this.http.get(this.API_URL + '/checklogin', {withCredentials: true}).pipe(map(res => res.json())).pipe(map((res) => {
      this.loggedIn.next(res.success);
      return res;
    }));
  }

  login(user): Observable<any> {
    let params = new URLSearchParams();
    params.set('username', user.username);
    params.set('password', user.password);
    return this.http.post(this.API_URL + '/login', params, {withCredentials: true})
      .pipe(map(res => res.json()))
      .pipe(map((res) => {
        this.loggedIn.next(res.success);
        return res;
      }));
  }

  register(user): Observable<any> {
    return this.http.post(this.API_URL + '/admin', user)
      .pipe(map(res => res.json()));
  }

  userRegister(user): Observable<any> {
    return this.http.post(this.API_URL + '/users', user)
      .pipe(map(res => res.json()));
  }

  logout(): Observable<any> {
    return this.http.post(this.API_URL + '/logout', {}, {withCredentials: true})
      .pipe(map(res => res.json()))
      .pipe(map(res => {
        this.loggedIn.next(false);
        return res;
      }));
  }
}
