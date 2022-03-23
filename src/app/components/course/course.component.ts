import { Component, Input, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  getStatusColor() {
    if (this.item.status === 'In progress') {
      return '#333333'
    } else if (this.item.status === 'Not started')
      return '#DE6B0F'
  }

  getBackgroundColor() {
    if (this.item.status === 'In progress') {
      return 'linear-gradient(0deg, #fff 60%, #AEE420 40%)';
    } else if (this.item.status === 'Not started')
      return 'linear-gradient(0deg, #fff 60%, #36C3B5 40%)';
  }

}
