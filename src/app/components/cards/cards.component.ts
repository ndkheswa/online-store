import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  panelOpenState: boolean;
  constructor() { }

  ngOnInit(): void {
    this.panelOpenState = true;
  }

}
