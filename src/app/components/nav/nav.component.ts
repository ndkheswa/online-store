import { AfterViewInit, Component, ElementRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NavItem } from 'src/app/nav-item';
import { AuthStatusService } from 'src/app/services/auth-status.service';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {

  @ViewChild('appDrawer') appDrawer: ElementRef;
  isExpanded: boolean;

  isAuthenticated: boolean;

  public loginItems: NavItem[] = [
    { route: "login", name: "Sign In"},
    { route: "register", name: "Sign Up"}
  ];

  public navItems: NavItem[] = [
    { route: "learner-dashboard", name: "Learner Dashboard" },
    { route: "courses", name: "Courses" }
  ];

  constructor(private cdr: ChangeDetectorRef, private authStatus: AuthStatusService , private navService: NavService) {}

  ngAfterViewInit(): void {
    this.navService.appDrawer = this.appDrawer;
    this.authStatus.currentObject.subscribe(status => {
      this.isAuthenticated = status;
      this.cdr.detectChanges();
    });
  }

  

  public getExpansionValue($event): void {
    this.isExpanded = $event;
    console.log(this.isExpanded);
  }

}
