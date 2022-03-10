import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyCoursesDataService } from 'src/app/services/my-courses-data.service';
import {MatDialog} from '@angular/material/dialog';
import { EnrollDialogComponent } from 'src/app/enroll-dialog/enroll-dialog.component';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-my-course-list',
  templateUrl: './my-course-list.component.html',
  styleUrls: ['./my-course-list.component.scss']
})
export class MyCourseListComponent implements OnInit {

  items: Observable<any[]>;
  myCourse$: any;

  selected : any;

  constructor(
    private courseService : CourseService,
    private myCoursesDataService: MyCoursesDataService,
     public dialog: MatDialog) { }

  ngOnInit(): void {
    this.myCoursesDataService.currentObject.subscribe( data => {
      this.items = data;
    
    });
    this.myCoursesDataService.selcetedCourse.subscribe(data => {
      this.selected = data
    })
  
  }

  enroll() {
    const dialogRef = this.dialog.open(EnrollDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      let user = JSON.parse(localStorage.getItem('currentUser'))
      this.myCourse$ = this.courseService.enrollUser(user.idToken.payload.sub, this.selected.id)
      this.myCoursesDataService.changeObject(this.myCourse$)
      location.reload();

      

    })
  }

}
