import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  currentStep: number = 0;
  steps: any[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      const e = {
        id: i + 1,
        order: i,
        title: `Week ${i}`,
        subtitle: `subtitle ${i}`
      }
      this.steps.push(e);
    }
  }

  goToStep(order: number){
    this.currentStep = order;
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  get content(): string {
    let step = this.steps[this.currentStep];
    return step.title;
  }

}
