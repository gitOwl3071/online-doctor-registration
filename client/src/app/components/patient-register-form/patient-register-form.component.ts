import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { patientRegister } from '../../patientRegister';

@Component({
  selector: 'app-patient-register-form',
  templateUrl: './patient-register-form.component.html',
  styleUrls: ['./patient-register-form.component.css'],
  providers: [PatientService]
})
export class PatientRegisterFormComponent implements OnInit {
  bloodGroupHasError: boolean | undefined;
  hideShow: boolean | undefined;  
  submitted: boolean | undefined;

  bloodGroups = ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'];

  //model= new patientRegister(1,'Andrew Hall',30,'','default','andrewhall@gmail.com','7854723690','andrewhall123Az!@');

  validateBloodGroup(value: any) {
    if(value === 'default') {
      this.bloodGroupHasError = true;
    } else {
      this.bloodGroupHasError = false;
    }
  }

  toggleHideShow() {
    this.hideShow = !this.hideShow;
  }

  constructor(public _patientService: PatientService) { }

  onSubmit(form : NgForm) {
    this.submitted= true;
    this._patientService.postPatient(form.value)
    .subscribe(
      data => console.log('Success!',data),
      error => console.log('Error!',error)
    )
  }

  ngOnInit(): void {
  }

}

