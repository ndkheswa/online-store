import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { this.apiUrl = baseUrl }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + '/course');
  }

  getUserCourses(id: string): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + `/course/user/${id}`);
  }

  getCourse(id: string): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + `/course/${id}`);
  }


  enrollUser(userId: string, courseId: string) {

    return this.http.post<any>(this.apiUrl + `/course/assign/user`, {"userId": userId, "courseId": courseId})
  }

}
