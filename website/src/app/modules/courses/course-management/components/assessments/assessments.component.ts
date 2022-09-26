import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss']
})
export class AssessmentsComponent implements OnInit {
  assessments = [
    {
      title: 'Quiz 1',
      type: 'Quiz',
      dueDate: new Date(),
      closedDate: new Date(),
      completionStatus: '1 submission, 1 file',
      evalutationStatus: 'Read',
      score: '100/100',
      scor_ptc: 100
    },
    {
      title: 'Lab 1',
      type: 'Lab',
      dueDate: new Date(),
      closedDate: new Date(),
      completionStatus: '2 submission, 4 file',
      evalutationStatus: 'Unread',
      score: '17/20',
      scor_ptc: 85
    },
    {
      title: 'Exam 1',
      type: 'Exam',
      dueDate: new Date(),
      closedDate: new Date(),
      completionStatus: 'Not Submitted',
      evalutationStatus: '',
      score: '-/50',
      scor_ptc: 0
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
