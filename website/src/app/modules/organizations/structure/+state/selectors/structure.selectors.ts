import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromReducer from "../reducers/structure.reducer";

const getStructureFeatureSelector =
    createFeatureSelector<fromReducer.OrganizationStructureState>(
        fromReducer.ORG_STRUCTURE_KEY
    );

export const selectOrganizationStructure = createSelector(
    getStructureFeatureSelector,
    state => state.organizationHierarchy
);