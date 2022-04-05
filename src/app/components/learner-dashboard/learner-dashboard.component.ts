import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/model/course';
import { AuthStatusService } from 'src/app/services/auth-status.service';
import { CourseService } from 'src/app/services/course.service';
import { MyCoursesDataService } from 'src/app/services/my-courses-data.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-learner-dashboard',
  templateUrl: './learner-dashboard.component.html',
  styleUrls: ['./learner-dashboard.component.scss']
})
export class LearnerDashboardComponent implements OnInit {
  
  public allCourses$: Observable<Course[]>;
  public myCourses$: Observable<Course[]>;
  storedItem = null;

  constructor(private authStatus: AuthStatusService, private sharedDataService: SharedDataService, private courseService: CourseService,
    private myCoursesDataService: MyCoursesDataService) { }


  ngOnInit(): void {
    this.storedItem = JSON.parse(localStorage.getItem('currentUser'));
    this.allCourses$ = this.courseService.getAll();
    this.myCourses$ = this.courseService.getUserCourses(this.storedItem.idToken.payload.sub);
    this.sharedDataService.changeObject(this.allCourses$);
    this.myCoursesDataService.changeObject(this.myCourses$);
    this.myCourses$.subscribe( data => {
      // console.log(data);
    });
  }

}
