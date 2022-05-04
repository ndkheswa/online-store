import { CurrencyPipe, JsonPipe } from '@angular/common';
import { HttpHeaders, HttpClient, HttpBackend, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, skip } from 'rxjs/operators';
import { LoginDto, User } from '../model/user';
import { AuthStatusService } from './auth-status.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserSubject = new BehaviorSubject<any>(null);
  currentUser = new Observable;

  apiUrl: string;

  constructor(private http: HttpClient, private httpBackend: HttpBackend, private authStatus: AuthStatusService, @Inject('BASE_URL') baseUrl: string) {
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

  public register(user: User) {
    return this.httpBackend.handle(new HttpRequest('POST',this.apiUrl + '/auth/register', user ))
  }

  public login(userDto: LoginDto) {
    return this.httpBackend.handle(new HttpRequest('POST',this.apiUrl + '/auth/login', userDto )).pipe(map(response => {
      let obj = JSON.stringify(response)
      let user = JSON.parse(obj)
      localStorage.setItem('currentUser', JSON.stringify(user.body));
      this.currentUserSubject.next(user.body);
    }))
    
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  get currentUserValue() {
    return this.currentUserSubject.value;
  }
}
