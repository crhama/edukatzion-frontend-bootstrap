import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-application',
  templateUrl: './student-application.component.html',
  styleUrls: ['./student-application.component.scss']
})
export class StudentApplicationComponent implements OnInit {

  currentTab = 'personal'

  constructor(private _router: Router) { }

  ngOnInit(): void {
    const urls = this._router.url.split('/');
    const url = urls[urls.length - 1];
    this.setActiveTab(url);
  }

  setActiveTab(tab: string){
    console.log('tab: ', tab);
    this.currentTab = tab;
    let url = `/students/admission/application/${tab}`;
    this._router.navigate([url]);
  }
}


