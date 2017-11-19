import { Component, Input } from '@angular/core';

export interface ICourse {
  courseId: String;
  courseName: String;
  courseType: String;
  courseEndDate: Date;
  courseStartDate: Date;
  courseDescription: String;
}

@Component({
  selector: 'app-course-item',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() courseData: ICourse;
  @Input() deleteCourse: () => {};

  editCourse() {
    console.log('now edit mode', this.courseData.courseId);
  }
}
