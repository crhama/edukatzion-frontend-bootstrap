import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DkzTreeviewItem } from 'src/app/modules/shared-components/dkz-treeview/models/dkz-treeview.model';

@Component({
  selector: 'app-organization-structure',
  templateUrl: './organization-structure.component.html',
  styleUrls: ['./organization-structure.component.scss']
})
export class OrganizationStructureComponent implements OnInit {
  organizations: DkzTreeviewItem[] = [
    {
      id: '1',
      name: 'University of Maryland Baltimore County',
      active: false,
      children: [
        {
          id: '2',
          name: 'Medical School',
          active: false,
          children: [
            {
              id: '3',
              name: 'Undergraduated',
              active: false
            },
            {
              id: '4',
              name: 'Graduated',
              active: false
            }
          ]
        },
        {
          id: '5',
          name: 'Law School',
          active: false,
          children: [
            {
              id: '6',
              name: 'Undergraduated',
              active: false
            },
            {
              id: '7',
              name: 'Graduated',
              active: false
            }
          ]
        }
      ]
    }
  ]

  
  constructor() { }

  ngOnInit(): void {}

  addItem(id: string){
    console.log('add: ', id);
  }
  editItem(id: string){
    console.log('edit: ', id);
  }
  deleteItem(id: string){
    console.log('delete: ', id);    
  }
  
}
