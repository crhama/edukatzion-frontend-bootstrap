import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseManagementComponent } from './components/course-management/course-management.component';
import { RouterModule } from '@angular/router';
import { courseManagementRouting } from './course-management.routing';
import { HomeComponent } from './components/home/home.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { ContentComponent } from './components/content/content.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { GradesComponent } from './components/grades/grades.component';
import { StudentsComponent } from './components/students/students.component';



@NgModule({
  declarations: [
    CourseManagementComponent,
    HomeComponent,
    SyllabusComponent,
    ContentComponent,
    AssessmentsComponent,
    GradesComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(courseManagementRouting)
  ]
})
export class CourseManagementModule { }
