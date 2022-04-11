import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin/admin-service.service';
import { CourseService } from 'src/app/services/course.service';
import {Chapter} from "../../model/chapter";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  form: FormGroup;
  items: Observable<any[]>;
  courses: any
  fileName = ""
  videoDuration : string
  currentCourseId: string
  currentSection: string
  currentCourse = ""
  sectionTitle = ""
  sections = []
  $uploadFile: File
  chapterTitle = ""
  constructor(
    public fb: FormBuilder,
    private courseServise : CourseService,
  ) {
      this.form = this.fb.group({
        video: [null]
      })

   }

  ngOnInit(): void {
    this.courses = this.courseServise.getAll()
    this.courses.subscribe(_data => {
      this.items = _data
      console.log(this.items)
    })
   
  }
  loadVideo = file => new Promise((resolve, reject) => {

     try {
         let video = document.createElement('video')
         video.preload = 'metadata'
 
         video.onloadedmetadata = function () {
           resolve(video.duration)
          }
          
          
          video.onerror = function () {
            reject("Invalid video. Please select a video file.")
          }
          
          video.src = window.URL.createObjectURL(file)
         
     } catch (e) {
         reject(e)
     }
 })

 setCourseId(id) {
    this.currentCourseId = id
    console.log(id)
    this.courseServise.getCourseSections(this.currentCourseId).subscribe(course => {
    this.currentCourse = course.name
    this.sections = course.sections

    console.log(this.sections)
  })
 }

 setTitle(title) {
    this.sectionTitle = title
 }

 setChapterTitle(title) {
   this.chapterTitle = title
  }


 async uploadFile(e)  {
    
  let file = (e.target as HTMLInputElement).files[0]  
  this.form.patchValue({
    video : file
  })
   
    if(file) {
      this.$uploadFile = file
      this.fileName = file.name;
      const video = await this.loadVideo(e.currentTarget.files[0])
      this.videoDuration = String(video)
      this.form.get('video').updateValueAndValidity()
    }
  }


  public async createChapter() {
    const formData = new FormData()

    let chapter : Chapter = {
      title: this.sectionTitle,
      duration: this.videoDuration,
    }
    if(this.currentSection) {

      this.courseServise.createChapter(
        chapter,
        this.currentSection
      ).subscribe(chapter => {
        formData.append('video', this.form.get('video').value)
        // formData.append('id', chapter.id)
        // this.formData.append("file", this.$uploadFile)
        // this.formData.append("\"file\"", this.$uploadFile, this.fileName) 
        // this.formData.append("\"chapterId\"", chapter.id)
        let checkVideo = this.$uploadFile
        console.log(checkVideo)
        this.courseServise.upload(
          chapter.id,
          formData
        ).subscribe(response => {
          console.log(response)
        })
      })
    }

  }


  public async createSection() {
   if(this.currentCourseId) {

      this.courseServise.createSection(this.currentCourseId, {"title" : this.sectionTitle}).subscribe(response => {
        console.log(response)
      })
     
   }
  }
}

