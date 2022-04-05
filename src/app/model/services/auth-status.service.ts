import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStatusService {

  public objectToUpdate: Observable<boolean> = null;
  private objectSource = new BehaviorSubject<Observable<boolean>>(this.objectToUpdate);

  constructor() { }

  currentObject = this.objectSource.asObservable();

  changeObject(object: any) {
    this.objectSource.next(object);
  }

  
}
