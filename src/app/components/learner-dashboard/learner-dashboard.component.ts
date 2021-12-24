import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/model/course';
import { AuthStatusService } from 'src/app/services/auth-status.service';
import { CourseService } from 'src/app/services/course.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-learner-dashboard',
  templateUrl: './learner-dashboard.component.html',
  styleUrls: ['./learner-dashboard.component.scss']
})
export class LearnerDashboardComponent implements OnInit {
  
  public courses$: Observable<Course[]>;

  constructor(private authStatus: AuthStatusService, private sharedDataService: SharedDataService, private courseService: CourseService) { }


  ngOnInit(): void {
    this.courses$ = this.courseService.getAll();
    this.sharedDataService.changeObject(this.courses$);
  }

}
