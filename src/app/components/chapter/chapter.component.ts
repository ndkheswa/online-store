import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  chapterList = [
    {"id": 1, "title": "Introduction", "duration": "2:51"},
    {"id": 2, "title": "What is angular", "duration": "1:57"},
    {"id": 2, "title": "Your first angular app", "duration": "3:01"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
