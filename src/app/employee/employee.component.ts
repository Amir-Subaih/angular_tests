import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employeeid: number = 1;
  employeename: string = 'John Doe';
  employestatus: string = 'under testing';
  employeeJob: string = 'Insart Job';
  employeesJob = ['Developer', 'Tester', 'Manager'];

  hesuccess: boolean = true;
  iserror: boolean = false;

  employeeClass={
    'success': this.hesuccess,
    'error': this.iserror
  }

  employeeStyle={
    color:'red',
    fontSize:'20px'
  }

  getEmployeeDetails(){
    return this.employeename 
  }
  getEmployeeStatus(){
    this.employestatus="Active";
  }
  getEmployeeJob(){
    this.employeesJob.push(this.employeeJob);
  }
}
