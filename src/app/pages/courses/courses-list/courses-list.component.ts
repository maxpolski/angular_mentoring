import { Component } from '@angular/core';

import { ICourse } from '../course/course.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: 'courses-list.component.html',
  styleUrls: ['courses-list.component.css'],
})
export class CoursesListComponent {
  private courses: ICourse[];
  constructor() {
    this.courses = [{
      courseId: '123',
      courseName: 'Test',
      courseType: 'Video',
      courseEndDate: new Date(2017, 11, 30),
      courseStartDate: new Date(2017, 10, 30),
      courseDescription: 'testCourse',
    }, {
      courseId: '321',
      courseName: 'Test1',
      courseType: 'Video',
      courseEndDate: new Date(2017, 11, 28),
      courseStartDate: new Date(2017, 10, 28),
      courseDescription: 'testCourse1',
    }];
  }
  deleteCourse = (id) => () =>
    this.courses = this.courses.filter(course => course.courseId !== id)
}
