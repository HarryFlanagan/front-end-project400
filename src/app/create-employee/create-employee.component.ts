import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IEmployee } from 'src/models/IEmployee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
  providers: [EmployeeService]
})
export class CreateEmployeeComponent implements OnInit {

    @Input() employee : IEmployee;
    @Output() employeeFormClose = new EventEmitter<IEmployee>();
    

    employeeForm: FormGroup;
    newEmployee: IEmployee;

     /*Crete Employee Form Infomation*/
     get firstName() {
        return this.employeeForm.get('firstName');
      }
      get lastName() {
        return this.employeeForm.get('lastName');
      }
      get email() {
        return this.employeeForm.get('email');
      }
      get phone() {
        return this.employeeForm.get('phone');
      }
      get dob() {
        return this.employeeForm.get('dob');
      }
      get hourlyWage() {
        return this.employeeForm.get('hourlyWage');
      }
      get isManager() {
        return this.employeeForm.get('isManager');
      }

  constructor(private employeeService: EmployeeService) { }

  onSubmit(firstName: string ,lastName: string ,email: string, phone: string ,dateOfBirth: Date, hourlyWage: number, isManager: boolean){
    this.employee = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        dateOfBirth: dateOfBirth,
        hourlyWage: hourlyWage,
        isManager: isManager
    }
   this.employeeService.createEmployee(this.newEmployee); 
   }

  ngOnInit(): void {
  }

}

