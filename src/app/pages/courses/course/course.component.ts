import { Component } from '@angular/core';

interface ICourseItem {
  courseName: String;
  courseType: String;
  courseDuration: Date;
  courseStartDate: Date;
  courseDescription: String;
  editCourse(): void;
  deleteCourse(): void;
}

@Component({
  selector: 'app-course-item',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements ICourseItem {
  constructor() {}

  readonly courseName;
  readonly courseType;
  readonly courseDuration;
  readonly courseStartDate;
  readonly courseDescription;

  editCourse() {}
  deleteCourse() {}
}
