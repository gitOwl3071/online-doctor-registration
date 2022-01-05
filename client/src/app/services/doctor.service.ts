import { HttpClient } from '@angular/common/http';
import { Injectable } from  '@angular/core';
import { Subject } from 'rxjs';
import { doctorRegister } from '../doctorRegister';

@Injectable({
    providedIn: 'root'
})

export class DoctorService {

    _url = 'http://localhost:3000/api';
    constructor(private http: HttpClient) { }

    postDoctor(doctor: doctorRegister) {
        return this.http.post(this._url+'/registerDoctor',doctor);
    }

    /*registerDoctor(fullName1?: String,qualification?: String,specialization?: String,yoe?: Number,clinicAdd?: String,email1?: String,mobileNo1?: String,fees?: Number,psw1?: String) {
        return this._http.post<any>(this._url, {
            fullName1,
            qualification,
            specialization,
            yoe,
            clinicAdd,
            email1,
            mobileNo1,
            fees,
            psw1
        }); 
    }*/
    selectedDoctor: doctorRegister = {
        id: 0,
        fullName1: '',
        qualification: '',
        specialization: '',
        yoe: 0,
        city: '',
        email1: '',
        mobileNo1: '',
        fees: 0,
        psw1: ''
    }
}