import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { this.apiUrl = baseUrl }


  upload(chapterId: Number, file: File, title: string) {

    return this.http.post<any>(this.apiUrl + `/chapter/upload`, {"chapterId": chapterId, "file": file, "title": title})
  }



  createChapter() {
    
  }

}
