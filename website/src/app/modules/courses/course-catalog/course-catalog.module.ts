import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCatalogComponent } from './components/course-catalog/course-catalog.component';
import { RouterModule } from '@angular/router';
import { courseCatalogRoutes } from './course-catalog.routing';



@NgModule({
  declarations: [
    CourseCatalogComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(courseCatalogRoutes)
  ]
})
export class CourseCatalogModule { }
