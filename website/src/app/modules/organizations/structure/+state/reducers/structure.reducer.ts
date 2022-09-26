import { createReducer, on } from "@ngrx/store";
import { DkzTreeviewItem } from "src/app/modules/shared-components/dkz-treeview/models/dkz-treeview.model";
import { loadOrganizationStructureSuccess } from "../actions/structure.actions";

export const ORG_STRUCTURE_KEY = 'orgStructure'

export interface OrganizationStructureState {
    organizationHierarchy: DkzTreeviewItem[];
}

const initialState: OrganizationStructureState = {
    organizationHierarchy: []
}

export const orgStructureReducer = createReducer(
    initialState,
    on(loadOrganizationStructureSuccess, (state, { organizationHierarchy }) => {
        return {
            ...state,
            organizationHierarchy
        }
    })
) 