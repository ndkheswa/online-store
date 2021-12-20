import { CurrencyPipe } from '@angular/common';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginDto, User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserSubject = new BehaviorSubject<any>(null);
  currentUser = new Observable;
  isAuthenticated = false;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  apiUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
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
    return this.http.post<User>(this.apiUrl + '/auth/register', user, this.httpOptions);
  }

  public login(userDto: LoginDto) {
    return this.http.post<any>(this.apiUrl + '/auth/login', userDto, this.httpOptions)
    .pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      console.log(user);
    }));
    this.isAuthenticated = true;
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.isAuthenticated  = false;
  }

  get currentUserValue() {
    return this.currentUserSubject.value;
  }
}
