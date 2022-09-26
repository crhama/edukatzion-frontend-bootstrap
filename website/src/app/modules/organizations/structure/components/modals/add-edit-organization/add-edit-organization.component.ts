import { Component, Input, OnInit } from '@angular/core';
import { DkzTreeviewItem } from 'src/app/modules/shared-components/dkz-treeview/models/dkz-treeview.model';

@Component({
  selector: 'app-add-edit-organization',
  templateUrl: './add-edit-organization.component.html',
  styleUrls: ['./add-edit-organization.component.scss']
})
export class AddEditOrganizationComponent implements OnInit {
  @Input() model!: DkzTreeviewItem;
  @Input() parentModel!: DkzTreeviewItem;

  constructor() { }

  ngOnInit(): void {
  }

}
