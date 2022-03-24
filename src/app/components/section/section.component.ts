import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  items = [
    { "title": "Getting Started", 
      "chapterList": [
        { "id": 1, "title": "Introduction", "duration": "2:51" },
        { "id": 2, "title": "What is Python", "duration": "1:57" },
        { "id": 3, "title": "Setting up a development environment", "duration": "1:57" }
      ] 
    },
    { "title": "Python Fundamentals", 
      "chapterList": [
        { "id": 1, "title": "Python data types", "duration": "3:01" },
        { "id": 2, "title": "Variables in Python", "duration": "1:57" },
        { "id": 3, "title": "Operators and expressions", "duration": "3:01" }    
      ] 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
