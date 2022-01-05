import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDropdownListComponent } from './city-dropdown-list.component';

describe('CityDropdownListComponent', () => {
  let component: CityDropdownListComponent;
  let fixture: ComponentFixture<CityDropdownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityDropdownListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDropdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
