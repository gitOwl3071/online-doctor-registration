import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-dropdown-list',
  templateUrl: './doctor-dropdown-list.component.html',
  styleUrls: ['./doctor-dropdown-list.component.css']
})
export class DoctorDropdownListComponent implements OnInit {

  specialists = ['Allergists', 'Anesthesiologists', 'Cardiologists', 'Critical Care Medicine Specialists', 'Dentists', 'Dermatologists', 'Endocrinologists', 'Emergency Medicine Specialists', 'Gastroenterologists', 'General Surgeons', 'Hematologists', 'Infectious Disease Specialists', 'Nephrologists', 'Neurologists', 'Obstetricians', 'Oncologists', 'Ophthalmologists', 'Otolaryngologists', 'Physiatrists', 'Plastic Surgeons', 'Psychiatrists', 'Pulmonologists', 'Radiologists', 'Rheumatologists', 'Urologists'];


  constructor() { }

  ngOnInit(): void {
    
  }

}
