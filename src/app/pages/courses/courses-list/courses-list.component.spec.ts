import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoursesListComponent } from './courses-list.component';
describe('CoursesListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));
  it('should create the courses-list', async(() => {
    const fixture = TestBed.createComponent(CoursesListComponent);
    const courseList = fixture.debugElement.componentInstance;
    expect(courseList).toBeTruthy();
  }));
});
