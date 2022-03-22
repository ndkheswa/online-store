import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';
import { MyCoursesDataService } from 'src/app/services/my-courses-data.service';
import { EnrollErrorDialogComponent } from '../enroll-error-dialog/enroll-error-dialog.component';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  error = '';
  loading = false;
  private dialogConfig = new MatDialogConfig();

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private myCoursesDataService : MyCoursesDataService,
    private dialog: MatDialog  
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

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    };
  }


  /**
   * enrol() {
    let user = JSON.parse(localStorage.getItem('currentUser'))
    console.log(user.idToken.payload.sub, this.courseId)
    let req = this.courseService.enrollUser(user.idToken.payload.sub, this.courseId)
    req.subscribe(data => {
      console.log(data)
      location.replace('/learner-dashboard')
    })
  }
   */

  enroll() {
    this.loading = true;
    let user = JSON.parse(localStorage.getItem('currentUser'))
    console.log(user.idToken.payload.sub, this.courseId)
    this.courseService.enrollUser(user.idToken.payload.sub, this.courseId)
      .subscribe(
        data => {
          this.loading = false;
          location.replace('/learner-dashboard');
        }, 
        (error) => {
          this.loading = false;
          this.error = error;
          const dialogRef = this.dialog.open(EnrollErrorDialogComponent, this.dialogConfig);
          dialogRef.afterClosed()
            .subscribe(() => {
              location.replace('/learner-dashboard');
            });
        }
      );
  }
}