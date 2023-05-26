import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  //coursesService:CoursesService;

  constructor(private httpClient:HttpClient) {
    //this.courses=[];
    //this.coursesService = new CoursesService();
   }

  list():Course[]{ // return array
    return [{
      _id:'1',name:"Angular",category:'Front-end developer'
    }];
  }
}
