import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { tap } from 'rxjs';
import { DkzTreeviewItem } from 'src/app/modules/shared-components/dkz-treeview/models/dkz-treeview.model';
import { StructureFacade } from '../../+state/services/structure.facade';

@Component({
  selector: 'app-organization-structure',
  templateUrl: './organization-structure.component.html',
  styleUrls: ['./organization-structure.component.scss']
})
export class OrganizationStructureComponent implements OnInit {
  organizations!: DkzTreeviewItem[];
  

  constructor(private _facade: StructureFacade) { }

  ngOnInit(): void {
    this._facade.organizations$
      .pipe(
        tap((orgStructure) => this.organizations = orgStructure)
      )
      .subscribe();
    this._facade.loadOrganizationStructure();
  }

  addItem(id: string) {
    console.log('add: ', id);
  }
  editItem(id: string) {
    console.log('edit: ', id);
  }
  deleteItem(id: string) {
    console.log('delete: ', id);
  }

}
