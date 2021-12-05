import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empolyee } from '../Shared/Empolyee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = 'http://localhost:57193/api/employee';
  constructor(private _http: HttpClient) {}

  GetAllEmployees(): Observable<Empolyee[]> {
    return this._http.get<Empolyee[]>(this.url);
  }

  getEmployeeById(id: any): Observable<Empolyee> {
    return this._http.get<Empolyee>(`${this.url}/${id}`);
  }

  AddEmployee(data: Empolyee): Observable<any>{
    let formData = new FormData();
    formData.append('Name', data.Name);
    formData.append("SSN",`${data.SSN}`);
    formData.append("Address",`${data.Address}`);
    formData.append("Salary",`${data.Salary}`);
    formData.append("Image",`${data.Image}`);
    formData.append("Date_hired",`${data.Date_hired}`);
    formData.append("Job",`${data.Job}`);
    formData.append('imageFile', data.imageFile!);
    formData.append("User_Id",`${null}`);
    return this._http.post<any>(this.url+"/create", formData);
  }

  DeleteEmployee(id: any): Observable<Empolyee[]> {
    return this._http.delete<Empolyee[]>(`${this.url}/${id}`);
  }

  UpdateEmployee(data: Empolyee): Observable<any>{
    let formData = new FormData();
    formData.append('Name', data.Name);
    formData.append("SSN",`${data.SSN}`);
    formData.append("Address",`${data.Address}`);
    formData.append("Salary",`${data.Salary}`);
    formData.append("Image",`${data.Image}`);
    formData.append("Date_hired",`${data.Date_hired}`);
    formData.append("Job",`${data.Job}`);
    formData.append('imageFile', data.imageFile!);
    formData.append("User_ID",`${null}`);
    return this._http.put(`${this.url}/${data.Id}`,formData);
  }
}
