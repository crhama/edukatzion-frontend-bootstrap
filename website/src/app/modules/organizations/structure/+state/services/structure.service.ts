import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { DkzTreeviewItem } from "src/app/modules/shared-components/dkz-treeview/models/dkz-treeview.model";

@Injectable({
    providedIn: 'root'
})
export class StructureService {
    constructor() { }

    loadOrganizationStructure(): Observable<DkzTreeviewItem[]> {
        const organizations: DkzTreeviewItem[] = [
            {
                id: '1',                
                name: 'University of Maryland Baltimore County',
                active: false,
                children: [
                    {
                        id: '2',
                        parentId: '1',
                        name: 'Medical School',
                        active: false,
                        hierarchy: ['1', '2'],
                        children: [
                            {
                                id: '3',
                                parentId: '2',
                                name: 'Undergraduated',
                                active: false,
                                hierarchy: ['1', '2', '3'],
                            },
                            {
                                id: '4',
                                parentId: '2',
                                name: 'Graduated',
                                active: false,
                                hierarchy: ['1', '2', '4'],
                            }
                        ]
                    },
                    {
                        id: '5',
                        parentId: '1',
                        name: 'Law School',
                        active: false,
                        hierarchy: ['1', '5'],
                        children: [
                            {
                                id: '6',
                                parentId: '5',
                                name: 'Undergraduated',
                                active: false,
                                hierarchy: ['1', '5', '6'],
                            },
                            {
                                id: '7',
                                parentId: '5',
                                name: 'Graduated',
                                active: false,
                                hierarchy: ['1', '5', '7'],
                            }
                        ]
                    }
                ]
            }
        ];

        return of(organizations);
    }
}