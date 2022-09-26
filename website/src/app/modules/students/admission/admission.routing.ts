import { Route } from "@angular/router";
import { AdmissionComponent } from "./components/admission/admission.component";
import { RequirementsComponent } from "./components/requirements/requirements.component";
import { StudentApplicationComponent } from "./components/student-application/student-application.component";
import { AttendedSchoolsComponent } from "./components/wizard/attended-schools/attended-schools.component";
import { BasicInfoComponent } from "./components/wizard/basic-info/basic-info.component";
import { SummaryComponent } from "./components/wizard/summary/summary.component";

export const admissionRouting: Route[] = [
    {
        path: '',
        component: AdmissionComponent,
        children: [
            {
                path: '',
                redirectTo: 'requirements',
                pathMatch: 'full'
            },
            {
                path: 'requirements',
                component: RequirementsComponent
            },
            {
                path: 'undergraduate',
                component: RequirementsComponent
            },
            {
                path: 'graduate',
                component: RequirementsComponent
            },
            {
                path: 'application',
                component: StudentApplicationComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'basic-info',
                        pathMatch: 'full'
                    },
                    {
                        path: 'basic-info',
                        component: BasicInfoComponent
                    },
                    {
                        path: 'schools-attended',
                        component: AttendedSchoolsComponent
                    },
                    {
                        path: 'summary',
                        component: SummaryComponent
                    }
                ]
            }
        ]
    }
]