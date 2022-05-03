import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }

}
