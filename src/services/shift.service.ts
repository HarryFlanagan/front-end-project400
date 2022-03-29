import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

private springBootAPI = 'http://localhost:8080/api/v1/shift'

  constructor(private httpClient: HttpClient) { }

  getShifts(): Observable<any>{
    return this.httpClient.get(this.springBootAPI)
    }
    getShiftById(id: number): Observable<any>{
        let springBootAPI: string = this.springBootAPI + '/' + id;
        return this.httpClient.get(springBootAPI)
    }

}
