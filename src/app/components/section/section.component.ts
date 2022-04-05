import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  items = [
    { "title": "Getting Started", "chapterList": [
        { "id": 1, "title": "Introduction", "duration": "2:51" },
        { "id": 2, "title": "What is angular", "duration": "1:57" },
        { "id": 2, "title": "Your first angular app", "duration": "3:01" }    
      ] 
    },
    { "title": "Angular Fundamentals", "chapterList": [
        { "id": 1, "title": "Introduction", "duration": "2:51" },
        { "id": 2, "title": "What is angular", "duration": "1:57" },
        { "id": 2, "title": "Your first angular app", "duration": "3:01" }
      ] 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
