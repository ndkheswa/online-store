import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  courses: any
  items: Observable<any[]>;
  
  constructor(
    private courseServise : CourseService,
  ) {  
   }

  ngOnInit(): void {
    this.courses = this.courseServise.getAll()
    this.courses.subscribe(_data => {
      this.items = _data
      console.log(this.items)
    })
   
  }

}

