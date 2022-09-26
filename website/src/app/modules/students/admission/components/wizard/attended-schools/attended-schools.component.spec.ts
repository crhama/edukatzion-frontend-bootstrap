import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendedSchoolsComponent } from './attended-schools.component';

describe('AttendedSchoolsComponent', () => {
  let component: AttendedSchoolsComponent;
  let fixture: ComponentFixture<AttendedSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendedSchoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendedSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
