import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { DkzTreeviewItem } from "src/app/modules/shared-components/dkz-treeview/models/dkz-treeview.model";
import { loadOrganizationStructureRequest } from "../actions/structure.actions";
import { OrganizationStructureState } from "../reducers/structure.reducer";
import { selectOrganizationStructure } from "../selectors/structure.selectors";

@Injectable({
    providedIn: 'root'
})
export class StructureFacade {
    get organizations$(): Observable<DkzTreeviewItem[]>{
        return this._store.pipe(
            select(selectOrganizationStructure)
        );
    }

    constructor(private _store: Store<OrganizationStructureState>){}

    getOrganizationStructure(){
        this._store.dispatch(loadOrganizationStructureRequest())
    }
}