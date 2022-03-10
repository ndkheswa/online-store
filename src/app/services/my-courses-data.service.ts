import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class MyCoursesDataService {

  public objectToUpdate: Observable<any[]> = null;
  private objectSource = new BehaviorSubject<Observable<Course[]>>(this.objectToUpdate);
  private selectedCourseUpdate = new BehaviorSubject<any>('')
  constructor() { }

  currentObject = this.objectSource.asObservable();
  selcetedCourse = this.selectedCourseUpdate.asObservable()

  changeObject(object: any) {
    this.objectSource.next(object);
  }

  changeSelectedCourse(course: any) {
    this.selectedCourseUpdate.next(course)
  }
}
