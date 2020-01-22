import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dummy-employee',
  templateUrl: './dummy-employee.component.html',
  styleUrls: ['./dummy-employee.component.css']
})
export class DummyEmployeeComponent implements OnInit {
  idvalue:number;
  namevalue:string;
  agevalue:number;  
  employee: Employee[];
  total: {};

  constructor(private employeeService: EmployeeService, private http: HttpClient) { }

  _url ="https://my-json-server.typicode.com/cryptonrohit/jason/employeeDetails";
   
  ngOnInit() {
    return this.employeeService.getEmployee()
    .subscribe(data=> this.employee = data)
  }

  // idinputClick(idevent){
  //   this.idvalue = idevent.target.value;
  //   this.namevalue = idevent.target.value.name;
  //   console.log(this.idvalue);
  // }
  

  onSubmit(){
    var total = {id: this.idvalue,
      name: this.namevalue,
      age: this.agevalue}
      this.employee.push(total);  
      
      this.idvalue = null;
      this.namevalue = null;
      this.agevalue = null;
    //this.http.post<Employee[]>(this._url,total).subscribe(data => this.employee = data);
    //return this.employeeService.createEmployee(this.employee).subscribe(data=>this.employee = data);
    
  }

  onClickDelete(){
    this.employee.pop();
    //return this.employeeService.deleteEmployee().subscribe(data=>this.employee = data);
  }

}