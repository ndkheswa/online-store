import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public objectToUpdate: Observable<any[]> = null;
  private objectSource = new BehaviorSubject<Observable<Course[]>>(this.objectToUpdate);

  constructor() { }

  currentObject = this.objectSource.asObservable();

  changeObject(object: any) {
    this.objectSource.next(object);
  }

  

}
