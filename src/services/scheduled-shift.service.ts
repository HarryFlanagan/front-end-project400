import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduledShiftService {

private springBootAPI = 'http://localhost:8080/api/v1/scheduledShift'

  constructor(private httpClient: HttpClient) { }
  getScheduledShifts(): Observable<any>{
    return this.httpClient.get(this.springBootAPI)
    }
  addEmployeeToScheduledShift(scheduledShift){
    console.log(scheduledShift)
    this.httpClient.post(this.springBootAPI, scheduledShift).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
}
}
