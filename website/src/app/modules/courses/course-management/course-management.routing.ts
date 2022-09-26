import { Route } from "@angular/router";
import { AssessmentsComponent } from "./components/assessments/assessments.component";
import { ContentComponent } from "./components/content/content.component";
import { 
    CourseManagementComponent 
} from "./components/course-management/course-management.component";
import { GradesComponent } from "./components/grades/grades.component";
import { HomeComponent } from "./components/home/home.component";
import { StudentsComponent } from "./components/students/students.component";
import { SyllabusComponent } from "./components/syllabus/syllabus.component";

export const courseManagementRouting: Route[] = [
    {
        path: '',
        component: CourseManagementComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'syllabus',
                component: SyllabusComponent
            },
            {
                path: 'content',
                component: ContentComponent
            },
            {
                path: 'assessments',
                component: AssessmentsComponent
            },
            {
                path: 'grades',
                component: GradesComponent
            },
            {
                path: 'students',
                component: StudentsComponent
            }
        ]
    }
]