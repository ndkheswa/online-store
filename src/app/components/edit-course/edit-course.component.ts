import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from 'src/app/model/chapter';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  form: FormGroup;
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
    private route: ActivatedRoute,

  ) {
      this.form = this.fb.group({
        file: [null]
      })

   }

  ngOnInit(): void {
    this.currentCourseId = this.route.snapshot.paramMap.get('id')
    this.courseServise.getCourseSections(this.currentCourseId).subscribe(course => {
    this.currentCourse = course.name
    this.sections = course.sections
 
    console.log(this.sections)
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

setTitle(title) {
   this.sectionTitle = title
}

setChapterTitle(title) {
  this.chapterTitle = title
 }


async uploadFile(e)  {
   
 let _file = (e.target as HTMLInputElement).files[0]  
 this.form.patchValue({
   file : _file
 })
  
   if(_file) {
     this.$uploadFile = _file
     this.fileName = _file.name;
     const video = await this.loadVideo(e.currentTarget.files[0])
     this.videoDuration = String(video)
     this.form.get("file").updateValueAndValidity()
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
       formData.append("\"file\"", this.form.get("file").value)
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
