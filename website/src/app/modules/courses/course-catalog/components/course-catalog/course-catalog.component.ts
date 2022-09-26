import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-catalog',
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.scss']
})
export class CourseCatalogComponent implements OnInit {

  cards: any[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      let arr = []
      for (let j = 0; j < 4; j++) {
        arr.push({
          title: `Title ${i}-${j}`
        })                
      }
      this.cards.push(arr)
    }    
  }

}
