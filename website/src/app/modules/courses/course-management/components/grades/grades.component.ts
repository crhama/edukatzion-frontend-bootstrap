import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  assignments = [
    {
      id: 1,
      title: 'Week 1 discussion', 
      points: '4.5 / 5',
      weight: '2.7 / 3',
      grade: 90 
    },
    {
      id: 2,
      title: 'Week 1 discussion', 
      points: '4.5 / 5',
      weight: '2.7 / 3',
      grade: 90 
    },
    {
      id: 3,
      title: 'Week 1 discussion', 
      points: '4.5 / 5',
      weight: '2.7 / 3',
      grade: 90 
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  displayFeedback(id: number){

  }

}
