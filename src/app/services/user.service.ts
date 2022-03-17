import { CurrencyPipe } from '@angular/common';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginDto, User } from '../model/user';
import { AuthStatusService } from './auth-status.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserSubject = new BehaviorSubject<any>(null);
  currentUser = new Observable;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  apiUrl: string;

  constructor(private http: HttpClient, private authStatus: AuthStatusService, @Inject('BASE_URL') baseUrl: string) {
    this.apiUrl = baseUrl;
    this.currentUserSubject.next(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // send the error to remove logging infrastructure
      console.error(error);    // log to console instead

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }

  public register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/user', user, this.httpOptions);
  }

  public login(userDto: LoginDto) {
    return this.http.post<any>(this.apiUrl + '/auth/login', userDto, this.httpOptions)
    .pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    }));
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  get currentUserValue() {
    return this.currentUserSubject.value;
  }
}
