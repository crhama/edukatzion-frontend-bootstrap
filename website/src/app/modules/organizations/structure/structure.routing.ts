import { Route } from "@angular/router";
import { OrganizationStructureComponent } from "./components/organization-structure/organization-structure.component";

export const orgStructureRouting: Route[] = [
    {
        path: '',
        component: OrganizationStructureComponent
    }
]