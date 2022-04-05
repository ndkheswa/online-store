import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { this.apiUrl = baseUrl }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + '/user');
  }

  getUserCourses(id: string): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + `/user/courses/${id}`);
  }

  getCourse(id: string): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + `/user/course/${id}`);
  }


  enrollUser(userId: string, courseId: string) {

    return this.http.post<any>(this.apiUrl + `/user/assignCourse`, {"userId": userId, "courseId": courseId})
  }

}
