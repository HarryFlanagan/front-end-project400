import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IScheduledShift } from 'src/models/IScheduledShift';

@Injectable({
    providedIn: 'root'
})
export class ScheduledShiftService {

    private springBootAPI = 'http://localhost:5000/api/v1/scheduledShift'

    constructor(private httpClient: HttpClient) { }
    getScheduledShifts(): Observable<any> {
        return this.httpClient.get(this.springBootAPI)
    }
    getScheduledShiftsByShiftId(id: number): Observable<any> {
        let springBootAPI: string = this.springBootAPI + '/' + id;
        return this.httpClient.get(springBootAPI)
    }
    addEmployeeToScheduledShift(scheduledShift) {
        console.log(scheduledShift)
        this.httpClient.post(this.springBootAPI, scheduledShift).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        )
    }
    deleteScheduledShift(id: number): Observable<IScheduledShift> {
        console.log('deleting scheduled shift with ' + id);
        let springBootAPI: string = this.springBootAPI + '/' + id;
        console.log(this.springBootAPI + '/' + id);
        return this.httpClient.delete<IScheduledShift>(springBootAPI)
        
      }
}
