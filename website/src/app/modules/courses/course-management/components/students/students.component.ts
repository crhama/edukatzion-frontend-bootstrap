import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  tableData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      const arr = ['Trudy Berg', '129.5 / 135', '95.9%',	'13.4 / 15',	'19 / 20',	'97 / 100'];
      this.tableData.push(arr);      
    }
  }

}
