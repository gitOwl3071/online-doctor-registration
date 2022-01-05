import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { doctorRegister } from '../doctorRegister';

@Injectable({
  providedIn: 'root'
})
export class DoctorListService {

  _url = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  
}
