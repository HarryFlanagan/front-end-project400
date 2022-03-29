import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})

export class AllEmployeesComponent {
    
    title = 'workweek'
    listEmployees: any;
    message: any;

    // public employees = [
    //     {"id": 1, "firstName": "Harry", "lastName": "Flanagan"},
    //     {"id": 2, "firstName": "James", "lastName": "Flanagan"}
    // ]
    constructor(private employeeService: EmployeeService){}
    ngOnInit(){
      this.employeeService.getEmployees().subscribe(data =>{this.listEmployees = data});
  }
  deleteEmployee(id:number){
      this.employeeService.deleteEmployee(id).subscribe({
          next: booking => this.message = "employee has been deleted",
          error: (err) => this.message = err
        });
        window.location.reload();
    } 

}
