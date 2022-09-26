import { Route } from "@angular/router";
import { 
    CourseCatalogComponent 
} from "./components/course-catalog/course-catalog.component";

export const courseCatalogRoutes: Route[] = [
    {
        path: '',
        component: CourseCatalogComponent
    }
]