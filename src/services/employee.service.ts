import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import{ IEmployee } from '../models/IEmployee';


@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

// private springBootAPI = 'http://localhost:5000/api/v1/employee'
private springBootAPI = 'http://springappproject400-env.eba-ssmatx2f.eu-west-1.elasticbeanstalk.com/api/v1/employee'

constructor(private httpClient: HttpClient){}

getEmployees(): Observable<any>{
return this.httpClient.get(this.springBootAPI)
}
createEmployee(employee){
    console.log(employee)
    this.httpClient.post(this.springBootAPI, employee).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
  console.log(employee)
    }
    updateReview(id: number, employee: IEmployee): Observable<IEmployee> {
        console.log('subscribing to update' + id);
        let springBootAPI: string = this.springBootAPI + '/' + id;
        return this.httpClient.put<IEmployee>(springBootAPI, employee)
      }
deleteEmployee(id: number): Observable<IEmployee> {
    console.log('delete to update' + id);
    let springBootAPI: string = this.springBootAPI + '/' + id;
    console.log(this.springBootAPI + '/' + id);
    return this.httpClient.delete<IEmployee>(springBootAPI)
    
  }
}

