import { Component } from '@angular/core';
import { EmployeeService } from 'src/services/employee.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
  })
export class EmployeeComponent {

  title = 'work-week';
  listEmployees: [];
  message: string;

//   public employees = [
//       {"id": 1, "firstName": "Harry", "lastName": "Flanagan"},
//       {"id": 2, "firstName": "James", "lastName": "Flanagan"}
//   ]
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

