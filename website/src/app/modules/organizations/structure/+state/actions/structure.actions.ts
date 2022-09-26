import { createAction, props } from "@ngrx/store";
import { DkzTreeviewItem } from "src/app/modules/shared-components/dkz-treeview/models/dkz-treeview.model";

export const loadOrganizationStructureRequest = createAction(
    '[Structure] Load Organization Structure Request'
);

export const loadOrganizationStructureSuccess = createAction(
    '[Structure] Load Organization Structure Success',
    props<{ organizationHierarchy: DkzTreeviewItem[] }>()
)