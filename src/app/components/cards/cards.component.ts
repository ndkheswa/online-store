import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  animations: [
    trigger('slide', [
      state('right', style({ transform: 'translateX(-50)'})),
      transition('* => right', animate(3000))
    ]),
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(2000)
      ])
    ])
  ]
})
export class CardsComponent implements OnInit {

  panelOpenState = true;
  constructor() { }

  ngOnInit(): void {

  }

}
