import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './pages/courses/course/index';
import { CoursesListComponent } from './pages/courses/courses-list/index';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
