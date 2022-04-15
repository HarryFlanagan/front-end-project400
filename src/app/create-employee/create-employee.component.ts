import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IEmployee } from 'src/models/IEmployee';
import { EmployeeService } from 'src/services/employee.service';
import { CognitoUserPool,CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

interface formDataInterface {
    "name": string;
    "family_name": string;
    "email": string;
    [key: string]: string;
  };

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
  providers: [EmployeeService]
})
export class CreateEmployeeComponent implements OnInit {

    isLoading:boolean = false;
    firstName:string = '';
    lastName:string = '';
    email:string = '';
    phone:string = '';
    dateOfBirth:Date = new Date;
    hourlyWage:number = 0;
    isManager:Boolean;
    password:string = '';
    userEmail;

    @Input() employee : IEmployee;
    @Output() employeeFormClose = new EventEmitter<IEmployee>();
    

    employeeForm: FormGroup;
    newEmployee: IEmployee;

  constructor(private employeeService: EmployeeService, private router: Router ) { }

   onSignup(form: NgForm){
    if (form.valid) {
     this.isLoading = true;
     var poolData = {
       UserPoolId: environment.cognitoUserPoolId, // Your user pool id here
       ClientId: environment.cognitoAppClientId // Your client id here
     };
     var userPool = new CognitoUserPool(poolData);
     var attributeList = [];
     let formData:formDataInterface = {
       "name": this.firstName,
       "family_name": this.lastName,
       "email": this.email
     }

     for (let key  in formData) {
       let attrData = {
         Name: key,
         Value: formData[key]
       }
       let attribute = new CognitoUserAttribute(attrData);
       attributeList.push(attribute)
     }
     userPool.signUp(this.email, this.password, attributeList, [], (
       err,
       result
     ) => {
       this.isLoading = false;
       if (err) {
         alert(err.message || JSON.stringify(err));
         return;
       }
       this.router.navigate(['']);
     });
     this.newEmployee = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        dateOfBirth: this.dateOfBirth,
        hourlyWage: this.hourlyWage,
        isManager: this.isManager
    }
    console.log(this.newEmployee)
   this.employeeService.createEmployee(this.newEmployee); 
    }
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

  ngOnInit(): void {
    this.userEmail = localStorage.getItem("userName")
  }

}