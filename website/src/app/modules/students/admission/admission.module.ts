import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionComponent } from './components/admission/admission.component';
import { RouterModule } from '@angular/router';
import { admissionRouting } from './admission.routing';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { StudentApplicationComponent } from './components/student-application/student-application.component';
import { BasicInfoComponent } from './components/wizard/basic-info/basic-info.component';
import { AttendedSchoolsComponent } from './components/wizard/attended-schools/attended-schools.component';
import { SummaryComponent } from './components/wizard/summary/summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdmissionComponent,
    RequirementsComponent,
    StudentApplicationComponent,
    BasicInfoComponent,
    AttendedSchoolsComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(admissionRouting),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdmissionModule { }
