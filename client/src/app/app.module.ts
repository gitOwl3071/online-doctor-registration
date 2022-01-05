import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CityDropdownListComponent } from './components/city-dropdown-list/city-dropdown-list.component';
import { DoctorDropdownListComponent } from './components/doctor-dropdown-list/doctor-dropdown-list.component';
import { LoginButtonsComponent } from './components/login-buttons/login-buttons.component';
import { PatientLoginFormComponent } from './components/patient-login-form/patient-login-form.component';
import { DoctorLoginFormComponent } from './components/doctor-login-form/doctor-login-form.component';
import { DoctorRegisterFormComponent } from './components/doctor-register-form/doctor-register-form.component';
import { PatientRegisterFormComponent } from './components/patient-register-form/patient-register-form.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CityDropdownListComponent,
    DoctorDropdownListComponent,
    LoginButtonsComponent,
    PatientLoginFormComponent,
    DoctorLoginFormComponent,
    DoctorRegisterFormComponent,
    PatientRegisterFormComponent,
    DoctorListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
