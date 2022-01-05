import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/services/doctor.service';
import { doctorRegister } from '../../doctorRegister';

@Component({
  selector: 'app-doctor-register-form',
  templateUrl: './doctor-register-form.component.html',
  styleUrls: ['./doctor-register-form.component.css'],
  providers: [DoctorService]
})
export class DoctorRegisterFormComponent implements OnInit {
  specializationHasError: boolean | undefined;
  hideShow: boolean | undefined;
  submitted: boolean | undefined;

  specializations = ['Allergist', 'Anesthesiologist', 'Cardiologist', 'Critical Care Medicine Specialist', 'Dentist', 'Dermatologist', 'Endocrinologist', 'Emergency Medicine Specialist', 'Gastroenterologist', 'General Surgeon', 'Hematologist', 'Infectious Disease Specialist', 'Nephrologist', 'Neurologist', 'Obstetrician', 'Oncologist', 'Ophthalmologist', 'Otolaryngologist', 'Physiatrist', 'Plastic Surgeon', 'Psychiatrist', 'Pulmonologist', 'Radiologist', 'Rheumatologist', 'Urologist'];

  //model = new doctorRegister(1,'John Doe','MBBS','default',5,'Kolkata','john@gmail.com','8697458732',1000,'abc!1ZXY');


  validateSpecialization(value: any) {
    if(value === 'default') {
      this.specializationHasError = true;
    } else {
      this.specializationHasError = false;
    }
  }

  toggleHideShow() {
    this.hideShow = !this.hideShow;
  }

  constructor(public _doctorService: DoctorService) { }

  onSubmit(form : NgForm) {
    this.submitted= true;
    this._doctorService.postDoctor(form.value)
    .subscribe(
      data => console.log('Success!',data),
      error => console.log('Error!',error)
    )
  }

  ngOnInit(): void {
  }

}