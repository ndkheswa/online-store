import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  item: any;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.currentObject.subscribe( data => {
      this.item = data;
    });
  }

  getStatusColor() {
    if (this.item[0].status === 'In progress') {
      return '#333333'
    } else if (this.item[0].status === 'Not started')
      return '#DE6B0F'
  }

  getBackgroundColor() {
    console.log('item: ', this.item[0].status);
    if (this.item[0].status === 'In progress') {
      return 'linear-gradient(0deg, #fff 60%, #AEE420 40%)';
    } else if (this.item[0].status === 'Not started')
      return 'linear-gradient(0deg, #fff 60%, #36C3B5 40%)';
  }

}
