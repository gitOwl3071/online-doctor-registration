import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-dropdown-list',
  templateUrl: './city-dropdown-list.component.html',
  styleUrls: ['./city-dropdown-list.component.css']
})
export class CityDropdownListComponent implements OnInit {

  cities = ['Kolkata', 'Mumbai', 'New Delhi', 'Chennai', 'Bangalore', 'Hyderabad'];

  constructor() { }

  ngOnInit(): void {
  }

}
