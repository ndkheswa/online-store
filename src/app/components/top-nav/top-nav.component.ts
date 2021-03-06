import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStatusService } from 'src/app/services/auth-status.service';
import { NavService } from 'src/app/services/nav.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Output() public isExpanded = new EventEmitter<boolean>();

  message = false;

  currentUser: Observable<any>;

  private returnUrl = '/';

  constructor(private router: Router, private userService: UserService, public navService: NavService) {
  }

  ngOnInit(): void {
    this.userService.currentUserSubject.subscribe( data => {
      this.currentUser = data;
    });
  }

  showSignupForm() {
    this.router.navigateByUrl('register');
  }

  showLoginForm() {
    // not implemented
    this.router.navigateByUrl('login');
  }

  logout() {
    // not implemented
    this.userService.logout();
    this.router.navigateByUrl('/');
  }

}
