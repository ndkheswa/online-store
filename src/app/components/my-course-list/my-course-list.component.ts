import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyCoursesDataService } from 'src/app/services/my-courses-data.service';

@Component({
  selector: 'app-my-course-list',
  templateUrl: './my-course-list.component.html',
  styleUrls: ['./my-course-list.component.scss']
})
export class MyCourseListComponent implements OnInit {

  items: Observable<any[]>;

  constructor(private myCoursesDataService: MyCoursesDataService) { }

  ngOnInit(): void {
    this.myCoursesDataService.currentObject.subscribe( data => {
      this.items = data;
      console.log(data);
    });
  }

}
