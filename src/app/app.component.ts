import { Component } from '@angular/core';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'work-week';
  listEmployees: [];
  public employees = [
      {"id": 1, "firstName": "Harry", "lastName": "Flanagan"},
      {"id": 2, "firstName": "James", "lastName": "Flanagan"}
  ]
  constructor(private employeeService: EmployeeService){}
  ngOnInit(){
    this.employeeService.getEmployees().subscribe(data =>{this.listEmployees = data});
}
}

