import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);

  isExpanded = new BehaviorSubject<boolean>(false);
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
   }

   public toggleNav() {
     this.isExpanded.next(!this.isExpanded);
   }

   public closeNav() {
     this.appDrawer.close();
   }

   public openNav() {
     this.appDrawer.open();
   }
}
