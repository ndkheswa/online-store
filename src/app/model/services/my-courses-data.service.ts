import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class MyCoursesDataService {

  public objectToUpdate: Observable<any[]> = null;
  private objectSource = new BehaviorSubject<Observable<Course[]>>(this.objectToUpdate);

  constructor() { }

  currentObject = this.objectSource.asObservable();

  changeObject(object: any) {
    this.objectSource.next(object);
  }
}
