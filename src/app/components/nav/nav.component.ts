import { AfterViewInit, Component, ElementRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavItem } from 'src/app/nav-item';
import { NavService } from 'src/app/services/nav.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {

  @ViewChild('appDrawer') appDrawer: ElementRef;
  isExpanded: boolean;

  currentUser: Observable<any>;

  public loginItems: NavItem[] = [
    { route: "login", name: "Sign In"},
    { route: "register", name: "Sign Up"}
  ];

  public navItems: NavItem[] = [
    { route: "", name: "Home" },
    { route: "learner-dashboard", name: "Learner Dashboard" }
  ];

  public logoutItems: NavItem[] = [
    { route: "", name: "Logout" }
  ];

  constructor(private cdr: ChangeDetectorRef, private userService: UserService , private navService: NavService) {
  }

  ngAfterViewInit(): void {
    this.navService.appDrawer = this.appDrawer;
    this.userService.currentUserSubject.subscribe(data => {
      this.currentUser = data;
    });
    this.cdr.detectChanges();
  }

  public getExpansionValue($event): void {
    this.isExpanded = $event;
  }

  logout() {
    this.userService.logout();
  }

}
