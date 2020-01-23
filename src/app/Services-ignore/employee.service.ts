import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Model-ignore/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }

//  private _url:string ="/assets/jsonfile/employeeDetails.json";
 _url ="https://my-json-server.typicode.com/cryptonrohit/jason/employeeDetails";

  getEmployee(){
    return this._http.get<Employee[]>(this._url);
  }

  createEmployee(employee:Employee[]){
    return this._http.post<Employee[]>(this._url,employee);
  }

  deleteEmployee(){
    return this._http.delete<Employee[]>(this._url);
  }
}
