import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'organizations/structure',
    pathMatch: 'full'
  },
  //Courses
  {
    path: 'courses',
    redirectTo: 'courses/catalog',
    pathMatch: 'full'
  },
  {
    path: 'courses/catalog',
    loadChildren: () => 
      import('./modules/courses/course-catalog/course-catalog.module')
      .then((m) => m.CourseCatalogModule)
  },
  {
    path: 'courses/management',
    loadChildren: () => 
      import('./modules/courses/course-management/course-management.module')
      .then((m) => m.CourseManagementModule)
  },
  //Students
  {
    path: 'students/admission',
    loadChildren: () => 
      import('./modules/students/admission/admission.module')
      .then((m) => m.AdmissionModule)
  },
  //Organizations
  {
    path: 'organizations/structure',
    loadChildren: () => 
      import('./modules/organizations/structure/structure.module')
      .then((m) => m.StructureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
