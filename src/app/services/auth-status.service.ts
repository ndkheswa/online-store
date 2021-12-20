import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStatusService {

  public objectToUpdate: boolean = null;
  private objectSource = new BehaviorSubject<boolean>(this.objectToUpdate);

  constructor() { }

  currentObject = this.objectSource.asObservable();

  changeObject(object: any) {
    this.objectSource.next(object);
  }

  
}
