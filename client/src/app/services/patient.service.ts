import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { patientRegister } from "../patientRegister";

@Injectable({
    providedIn: 'root'
})

export class PatientService {

    _url = 'http://localhost:3000/api';
    constructor(private http: HttpClient) { }

    postPatient(patient: patientRegister) {
        return this.http.post(this._url+'/registerPatient',patient);
    }

    selectedPatient: patientRegister = {
        id: 0,
        fullName2: "",
        age: 0,
        gender: "",
        bloodGroup: "",
        email2: "",
        mobileNo2: "",
        psw2: ""
    }
}