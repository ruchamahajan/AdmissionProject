import { Component } from '@angular/core';
import {ICourse} from './courses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'North Carolina Engineering Studies';
  showCourses=false;
  showRegistration=false;
  showSchedule=false;

  courses:ICourse[]=[
      {  
          "courseId": "G100",
          "courseName": "Engineering Drawing",
          "credit": 3,
          "startDate": "March 19, 2016",
          "description": "Engineering Drawing",
          "fees": 500,
          "grade": "Graduate",
      },
      {
          "courseId": "G200",
          "courseName": "Engineering Mathematics",
          "credit": 3,
          "startDate": "March 19, 2016",
          "description": "Engineering Mathematics",
          "fees": 500,
          "grade": "Post Graduate",
      },
      {
          "courseId": "G300",
          "courseName": "Machine Learning",
          "credit": 3,
          "startDate": "March 19, 2016",
          "description": "Engineering Mathematics",
          "fees": 500,
          "grade": "Post Graduate",
      },
      {
          "courseId": "G400",
          "courseName": "Big Data",
          "credit": 3,
          "startDate": "March 19, 2016",
          "description": "Engineering Mathematics",
          "fees": 500,
          "grade": "Post Graduate",
      },
      {
          "courseId": "G500",
          "courseName": "Design And Algorithms",
          "credit": 1,
          "startDate": "March 19, 2016",
          "description": "Engineering Mathematics",
          "fees": 500,
          "grade": "Post Graduate",
      },
      {
          "courseId": "G600",
          "courseName": "Object Oriented Programming",
          "credit": 2,
          "startDate": "March 19, 2016",
          "description": "Engineering Mathematics",
          "fees": 500,
          "grade": "Post Graduate",
      },
      {
          "courseId": "G700",
          "courseName": "Databases",
          "credit": 3,
          "startDate": "March 19, 2016",
          "description": "Engineering Mathematics",
          "fees": 500,
          "grade": "Post Graduate",
      },
      {
          "courseId": "G800",
          "courseName": "Project Management",
          "credit": 1,
          "startDate": "March 19, 2016",
          "description": "Engineering Mathematics",
          "fees": 500,
          "grade": "Post Graduate",
      },
      {
          "courseId": "G900",
          "courseName": "Applied Mechanics",
          "credit": 2,
          "startDate": "March 19, 2016",
          "description": "Engineering Mathematics",
          "fees": 500,
          "grade": "Post Graduate",
      },
      {
          "courseId": "P100",
          "courseName": "Java Programming",
          "credit": 3,
          "startDate": "March 19, 2016",
          "description": "Engineering Mathematics",
          "fees": 500,
          "grade": "Post Graduate",
      }
  ]


  showCoursesToggle():void{
    this.showRegistration = false;
    this.showCourses = !this.showCourses;
  }

  showRegistrationToggle():void{
    this.showCourses = false;
    this.showRegistration = true;
  }

  submitRegistration():void{
    this.showRegistration = false;
  }

  cancelRegistration():void{
    this.showRegistration = false;
  }

}
