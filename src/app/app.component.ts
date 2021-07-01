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
  @ViewChild('appDrawer') appDrawer: ElementRef;

    menuItems: MenuItem[] = [
      {
        label: 'DevFestFL',
        route: 'devfestfl',
        children: [
          {
            label: 'Speakers',
            route: 'devfestfl/speakers',
            children: [
              {
                label: 'Michael Prentice',
                route: 'devfestfl/speakers/michael-prentice',
                children: [
                  {
                    label: 'Create Enterprise UIs',
                    route: 'devfestfl/speakers/michael-prentice/material-design'
                  }
                ]
              },
              {
                label: 'Stephen Fluin',
                route: 'devfestfl/speakers/stephen-fluin',
                children: [
                  {
                    label: 'What\'s up with the Web?',
                    route: 'devfestfl/speakers/stephen-fluin/what-up-web'
                  }
                ]
              },
              {
                label: 'Mike Brocchi',
                route: 'devfestfl/speakers/mike-brocchi',
                children: [
                  {
                    label: 'My ally, the CLI',
                    route: 'devfestfl/speakers/mike-brocchi/my-ally-cli'
                  },
                  {
                    label: 'Become an Angular Tailor',
                    route: 'devfestfl/speakers/mike-brocchi/become-angular-tailor'
                  }
                ]
              }
            ]
          },
          {
            label: 'Sessions',
            route: 'devfestfl/sessions',
            children: [
              {
                label: 'Create Enterprise UIs',
                route: 'devfestfl/sessions/material-design'
              },
              {
                label: 'What\'s up with the Web?',
                route: 'devfestfl/sessions/what-up-web'
              },
              {
                label: 'My ally, the CLI',
                route: 'devfestfl/sessions/my-ally-cli'
              },
              {
                label: 'Become an Angular Tailor',
                route: 'devfestfl/sessions/become-angular-tailor'
              }
            ]
          },
          {
            label: 'Feedback',
            route: 'devfestfl/feedback'
          }
        ]
      }
    ];

  constructor(private navService: NavService) { }

  ngOnInit(): void {
  }

  login() {
    // not implemented
  }

  logout() {
    // not implemented
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    this.navService.appDrawer = this.appDrawer;
  }
}
