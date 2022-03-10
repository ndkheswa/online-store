import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';
import { MyCoursesDataService } from 'src/app/services/my-courses-data.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private myCoursesDataService : MyCoursesDataService  
  ) { }

  course : Course[]
  courseDetail = {}
  myCourse$ : Observable<any>
  courseId : string
  
  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id')
    const request = this.courseService.getCourse(this.courseId)
    request.subscribe(data => {
      this.course = data;
      this.courseDetail = this.course
    })
  this.myCoursesDataService.currentObject.subscribe(data => {
      
    })    
  }


  enrol() {
    let user = JSON.parse(localStorage.getItem('currentUser'))
    console.log(user.idToken.payload.sub, this.courseId)
    let req = this.courseService.enrollUser(user.idToken.payload.sub, this.courseId)
    req.subscribe(data => {
      console.log(data)
      location.replace('/learner-dashboard')
    })
  }
}
