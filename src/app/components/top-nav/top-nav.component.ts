import { Component, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Output() public toggleSideNav = new EventEmitter();
  private returnUrl = '/';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
      }
    });
   }

  ngOnInit(): void {
  }

}
