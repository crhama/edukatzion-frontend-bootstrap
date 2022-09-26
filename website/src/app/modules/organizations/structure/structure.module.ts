import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { orgStructureRouting } from './structure.routing';
import { OrganizationStructureComponent } from './components/organization-structure/organization-structure.component';
import { DkzTreeviewModule } from '../../shared-components/dkz-treeview/dkz-treeview.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromReducer from './+state/reducers/structure.reducer';
import { StructureEffects } from './+state/effects/structure.effects';
import { AddEditOrganizationComponent } from './components/modals/add-edit-organization/add-edit-organization.component';


@NgModule({
  declarations: [
    OrganizationStructureComponent,
    AddEditOrganizationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(orgStructureRouting),

    DkzTreeviewModule,

    StoreModule.forFeature(
      fromReducer.ORG_STRUCTURE_KEY,
      fromReducer.orgStructureReducer
    ),
    EffectsModule.forFeature([StructureEffects])
  ]
})
export class StructureModule { }
