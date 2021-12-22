import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-learner-dashboard',
  templateUrl: './learner-dashboard.component.html',
  styleUrls: ['./learner-dashboard.component.scss']
})
export class LearnerDashboardComponent implements OnInit {
  
  public courses$: Observable<Course[]>;

  constructor(private sharedDataService: SharedDataService, private courseService: CourseService) { }


  ngOnInit(): void {
    this.courses$ = this.courseService.getAll();
    this.sharedDataService.changeObject(this.courses$);
    
    setTimeout(() => {
      console.log(this.courses$);
    }, 3000);
    
  }

}
