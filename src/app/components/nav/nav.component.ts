import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isExpanded: boolean;

  public loginLinks = [
    {link: "login", name: "Sign In"},
    { link: "signup", name: "Sign Up"}
  ];

  public routeLinks = [
    {link: "software-engineering", name: "Software Engineering"},
    {link: "web-development", name: "Web Development"},
    {link: "cloud", name: "Cloud Computing"},
    {link: "spring-boot", name: "Build Microservices"}
  ];

   constructor(private navService: NavService) {}

  ngOnInit(): void {

  }

  public getExpansionValue($event): void {
    this.isExpanded = $event;
    console.log(this.isExpanded);
  }

}
