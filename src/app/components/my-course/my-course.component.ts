import { Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.scss']
})
export class MyCourseComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit(): void {
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
