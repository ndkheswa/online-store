import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public objectToUpdate: any[] = null;
  private objectSource = new BehaviorSubject<Course[]>(this.objectToUpdate);

  constructor() { }

  currentObject = this.objectSource.asObservable();

  changeObject(object: any) {
    this.objectSource.next(object);
  }

  

}
