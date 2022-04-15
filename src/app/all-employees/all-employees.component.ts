import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/services/employee.service';
import { CognitoUserPool,CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})

export class AllEmployeesComponent {
    
    title = 'workweek'
    listEmployees: any;
    message: any;
    userEmail;

    constructor(private employeeService: EmployeeService,  private router: Router ){}
    ngOnInit(){
     this.userEmail = localStorage.getItem("userName")
      this.employeeService.getEmployees().subscribe(data =>{this.listEmployees = data});
  }
  deleteEmployee(id:number){
      this.employeeService.deleteEmployee(id).subscribe({
          next: booking => this.message = "employee has been deleted",
          error: (err) => this.message = err
        });
        window.location.reload();
    } 
    onLogout(): void {
        let poolData = {
          UserPoolId: environment.cognitoUserPoolId,
          ClientId: environment.cognitoAppClientId
        };
        let userPool = new CognitoUserPool(poolData);
        let cognitoUser = userPool.getCurrentUser();
        cognitoUser?.signOut();
        localStorage.setItem('isLoggedIn', 'false')
        this.router.navigate(["signin"])
      }

}
