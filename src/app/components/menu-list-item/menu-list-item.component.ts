import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/model/menu-item';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(-90deg)' })),
      state('expanded', style({ transform: 'rotate(0deg)' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      )
    ])
  ]
})
export class MenuListItemComponent implements OnInit {
  expanded = false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: MenuItem;
  @Input() depth: number;

  constructor(private navService: NavService, public router: Router) {
    if (this.depth  === undefined) {
      this.depth = 0;
    }
   }

  ngOnInit(): void {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
      }
    });
  }

  onItemSelected(item: MenuItem): void {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

}