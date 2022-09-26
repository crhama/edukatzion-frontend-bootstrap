import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from "rxjs";
import * as fromActions from "../actions/structure.actions";
import { StructureService } from "../services/structure.service";

@Injectable()
export class StructureEffects {
    constructor(
        private _actions$: Actions,
        private _service: StructureService
        ) { }

    readonly loadOrganizationStructure$ = createEffect(() =>
        this._actions$.pipe(
            ofType(fromActions.loadOrganizationStructureRequest),
            mergeMap(() => this._service
                .loadOrganizationStructure()
                .pipe(
                    map((organizationHierarchy) => fromActions
                        .loadOrganizationStructureSuccess({ organizationHierarchy }))
                ))
            )
    );
}