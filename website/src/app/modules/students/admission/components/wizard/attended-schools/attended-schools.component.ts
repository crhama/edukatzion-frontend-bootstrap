import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attended-schools',
  templateUrl: './attended-schools.component.html',
  styleUrls: ['./attended-schools.component.scss']
})
export class AttendedSchoolsComponent implements OnInit {
  schoolsAttendedForm!: FormGroup;
  schoolsAttended = [
    {
      schoolName: 'State University at Mons-Hainaut',
      schoolAdrress: '20 Place du Parc',
      schoolCity: 'Mons',
      schoolZip: '7000',
      schoolCountry: 'Belgium',
      fromDate: '08-1991',
      toDate: '06-1991',      
      diplomaObtained: 'Commercial Engineering',
      results: 'A'
    }
  ];

  constructor(
    private _router: Router,
    private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.schoolsAttendedForm = this._fb.group({
      fromDate: '',
      toDate: '',
      schoolName: '',
      schoolAdrress: '',
      schoolCity: '',
      schoolZip: '',
      schoolCountry: '',
      diplomaObtained: '',
      results: ''
    });
  }

  previousStep(){
    let url = `/students/admission/application/basic-info`;
    this._router.navigate([url]);
  }

  nextStep(){
    let url = `/students/admission/application/summary`;
    this._router.navigate([url]);
  }

  save(){
    
  }

}
