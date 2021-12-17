import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Output() public isExpanded = new EventEmitter<boolean>();

  message = false;

  isAuthenticated = false;

  private returnUrl = '/';

  constructor(private router: Router ,public navService: NavService) {
  }

  ngOnInit(): void {
  }

  signup() {
    this.router.navigateByUrl('register');
  }

  login() {
    // not implemented
    this.router.navigateByUrl('login');
  }

  logout() {
    // not implemented
  }

}
