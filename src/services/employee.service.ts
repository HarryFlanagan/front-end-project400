import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
constructor(private httpClient: HttpClient){}
getEmployees(): Observable<any>{
return this.httpClient.get("http://localhost:8081/api/v1/employee")
}

}
