import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  basicInfoForm!: FormGroup;

  constructor(
    private _router: Router,
    private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.basicInfoForm = this._fb.group({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      alternateEmail: '',
      phone: '',
      alternatePhone: '',
      gender: '',
      maritalStatus: '',
      countryOfCitizenship: '',
      dateOfBirth: '',
      cityOfBirth: '',
      CountryOfBirth: '',
      address: '',
      address2: '',
      city: ''

    });
  }

  submit(){
    let url = `/students/admission/application/schools-attended`;
    this._router.navigate([url]);
  }

}
