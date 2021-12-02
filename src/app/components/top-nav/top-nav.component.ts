import { Component, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Output() public toggleSideNav = new EventEmitter();
  @Output() public isExpanded = new EventEmitter<boolean>();

  message = false;

  isAuthenticated = false;

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

  toggle(): void {
    this.toggleSideNav.emit();
    this.isExpanded.emit(!this.message);
  }

  login() {
    // not implemented
  }

  logout() {
    // not implemented
  }

}
