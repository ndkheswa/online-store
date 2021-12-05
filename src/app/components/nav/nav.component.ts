import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavItem } from 'src/app/nav-item';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {

  @ViewChild('appDrawer') appDrawer: ElementRef;
  isExpanded: boolean;

  public loginItems: NavItem[] = [
    { route: "login", name: "Sign In"},
    { route: "signup", name: "Sign Up"}
  ];

  public navItems: NavItem[] = [
    { route: "learner-dashboard", name: "Learner Dashboard" },
    { route: "courses", name: "Courses" }
  ];

  constructor(private navService: NavService) {}

  ngAfterViewInit(): void {
    this.navService.appDrawer = this.appDrawer;
  }

  

  public getExpansionValue($event): void {
    this.isExpanded = $event;
    console.log(this.isExpanded);
  }

}
