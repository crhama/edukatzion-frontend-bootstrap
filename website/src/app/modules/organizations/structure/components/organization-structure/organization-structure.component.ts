import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs';
import { DkzTreeviewItem } from 'src/app/modules/shared-components/dkz-treeview/models/dkz-treeview.model';
import { StructureFacade } from '../../+state/services/structure.facade';
import { AddEditOrganizationComponent } from '../modals/add-edit-organization/add-edit-organization.component';

@Component({
  selector: 'app-organization-structure',
  templateUrl: './organization-structure.component.html',
  styleUrls: ['./organization-structure.component.scss']
})
export class OrganizationStructureComponent implements OnInit {
  organizations!: DkzTreeviewItem[];


  constructor(
    private _facade: StructureFacade,
    private _modalService: NgbModal) { }

  ngOnInit(): void {
    this._facade.organizations$
      .pipe(
        tap((orgStructure) => this.organizations = orgStructure)
      )
      .subscribe();
    this._facade.loadOrganizationStructure();
  }

  addItem(id: string) {
    let model = this.findByIdRecursive(this.organizations, id);
    let parentModel = this.findByIdRecursive(this.organizations, model.parentId);
    const modalRef = this._modalService.open(AddEditOrganizationComponent);
    modalRef.componentInstance.model = model;
    modalRef.componentInstance.parentModel = parentModel;
  }

  editItem(id: string) {
    let model = this.findByIdRecursive(this.organizations, id);
    let parentModel = this.findByIdRecursive(this.organizations, model.parentId);
    const modalRef = this._modalService.open(AddEditOrganizationComponent);
    modalRef.componentInstance.model = model;
    modalRef.componentInstance.parentModel = parentModel;
  }
  
  deleteItem(id: string) {
    console.log('delete: ', id);
  }

  findByIdRecursive = (
    arr: DkzTreeviewItem[], id: string
  ): any => {
    for (let i = 0; i < arr.length; i++) {
      const elt = arr[i];
      if (elt.id === id) {
        return elt;
      } else {
        if (elt.children) {
          const found = this.findByIdRecursive(elt.children, id);
          if (found) {
            return found;
          }
        }
      }
    }
  }
}
