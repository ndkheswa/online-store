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
      return '#333334'
    } else if (this.item.status === 'Not started')
      return '#DC6B0F'
  }

  getStatusColor() {
    if (this.item.status === 'In progress') {
      return '#ADE423'
    } else if (this.item.status === 'Not started')
      return '#36C3B5'
  }

}
