import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Chapter } from '../model/chapter';
import { Course } from '../model/course';
import { Section } from '../model/section';

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

  createSection(courseId: string, section: Section ) {
    return this.http.post<any>(this.apiUrl + `/course/create/section/${courseId}`, section)
  }

  upload(chapterId: string, formData : FormData) {
    return this.http.post<any>(this.apiUrl + `/chapter/upload/`,{chapterId, formData} )
  }

  createChapter( chapter: Chapter, sectionId: string, ) {
    return this.http.post<any>(this.apiUrl + `/chapter/create/${sectionId}`, chapter)
  }

  getCourseSections(courseId: string) {
    return this.http.get<any>(this.apiUrl + `/course/chapter/${courseId}`)

  }

  enrollUser(userId: string, courseId: string) {

    return this.http.post<any>(this.apiUrl + `/course/assign/user`, {"userId": userId, "courseId": courseId})
  }

}
