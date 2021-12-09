import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }

  getBackgroundColor() {
    if (this.item.status === 'In progress') {
      return '#ADE420'
    } else if (this.item.status === 'Not started')
      return '#34C3B6'
  }

  getStatusColor() {
    if (this.item.status === 'In progress') {
      return '#333333';
    } else if (this.item.status === 'Not started')
      return '#DE6B0F';
  }

}
