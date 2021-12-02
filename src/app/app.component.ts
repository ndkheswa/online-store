import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from './model/menu-item';
import { NavService } from './services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-store';

  isAuthenticated = false;

  constructor(private navService: NavService) { }

  ngOnInit(): void {
  }

  login() {
    // not implemented
  }

  logout() {
    // not implemented
  }

  onScroll(event) {

  }
}
