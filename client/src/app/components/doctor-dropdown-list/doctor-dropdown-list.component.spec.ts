import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDropdownListComponent } from './doctor-dropdown-list.component';

describe('DoctorDropdownListComponent', () => {
  let component: DoctorDropdownListComponent;
  let fixture: ComponentFixture<DoctorDropdownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDropdownListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDropdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
