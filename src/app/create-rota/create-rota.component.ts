import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEmployee } from 'src/models/IEmployee';
import { IShift } from 'src/models/IShift';
import { IScheduledShift } from 'src/models/IScheduledShift';
import { EmployeeService } from 'src/services/employee.service';
import { ShiftService } from 'src/services/shift.service';
import { ScheduledShiftService } from 'src/services/scheduled-shift.service';
import * as _ from 'lodash';
import { DialogScheduledShiftComponent } from '../dialog-scheduled-shift/dialog-scheduled-shift.component';
import { Router } from '@angular/router';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-create-rota',
    templateUrl: './create-rota.component.html',
    styleUrls: ['./create-rota.component.css']
})
export class CreateRotaComponent implements OnInit {

    selectedValue: any;
    listEmployees: any;
    listScheduledShift: any;
    message: string;
    selectedEmployee: any;
    userEmail: any;
    display = "none";

    constructor(private employeeService: EmployeeService, private shiftService: ShiftService, private scheduledShiftService: ScheduledShiftService, public dialog: MatDialog,private router: Router) { }

    @Input() employee: IEmployee;
    @Input() shift: IShift;
    @Input() scheduledShift: IScheduledShift;

    @Output() employeeFormClose = new EventEmitter<IEmployee>();

    employeeForm: FormGroup;
    newEmployee: IEmployee;
    newScheduledShift: IScheduledShift;
    /*Scheduled Shifts by  Day*/
    listScheduledShiftOnADay1: any;
    listScheduledShiftOnADay2: any;
    listScheduledShiftOnADay3: any;
    listScheduledShiftOnADay4: any;
    listScheduledShiftOnADay5: any;
    listScheduledShiftOnADay6: any;
    listScheduledShiftOnADay7: any;
    listScheduledShiftOnADay8: any;
    listScheduledShiftOnADay9: any;
    listScheduledShiftOnADay10: any;
    listScheduledShiftOnADay11: any;
    listScheduledShiftOnADay12: any;
    listScheduledShiftOnADay13: any;
    listScheduledShiftOnADay14: any;
    listScheduledShiftOnADay15: any;
    listScheduledShiftOnADay16: any;
    listScheduledShiftOnADay17: any;
    listScheduledShiftOnADay18: any;
    listScheduledShiftOnADay19: any;
    listScheduledShiftOnADay20: any;
    listScheduledShiftOnADay21: any;
    listScheduledShiftOnADay22: any;
    listScheduledShiftOnADay23: any;
    listScheduledShiftOnADay24: any;
    listScheduledShiftOnADay25: any;
    listScheduledShiftOnADay26: any;
    listScheduledShiftOnADay27: any;

    
    /*Crete Employee Form Infomation*/
    get employeeId() {
        return this.employeeForm.get('employeeId');
    }

    getDropDownText(id, object) {
        const selObj = _.filter(object, function (o) {
            return (_.includes(id, o.id));
        });
        return selObj;
    }

    selectEmployee(employee: IEmployee): void {
        this.selectedEmployee = employee;
        console.log(employee.firstName)
    }

    ngOnInit(): void {
        this.userEmail = localStorage.getItem("userName")
        this.employeeService.getEmployees().subscribe(data => { this.listEmployees = data });
        this.scheduledShiftService.getScheduledShifts().subscribe(data => { this.listScheduledShift = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(1).subscribe(data => {this.listScheduledShiftOnADay1 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(2).subscribe(data => {this.listScheduledShiftOnADay2 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(3).subscribe(data => {this.listScheduledShiftOnADay3 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(4).subscribe(data => {this.listScheduledShiftOnADay4 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(5).subscribe(data => {this.listScheduledShiftOnADay5 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(6).subscribe(data => {this.listScheduledShiftOnADay6 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(7).subscribe(data => {this.listScheduledShiftOnADay7 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(8).subscribe(data => {this.listScheduledShiftOnADay8 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(9).subscribe(data => {this.listScheduledShiftOnADay9 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(10).subscribe(data => {this.listScheduledShiftOnADay10 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(11).subscribe(data => {this.listScheduledShiftOnADay11 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(12).subscribe(data => {this.listScheduledShiftOnADay12 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(13).subscribe(data => {this.listScheduledShiftOnADay13 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(14).subscribe(data => {this.listScheduledShiftOnADay14 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(15).subscribe(data => {this.listScheduledShiftOnADay15 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(16).subscribe(data => {this.listScheduledShiftOnADay16 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(17).subscribe(data => {this.listScheduledShiftOnADay17 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(18).subscribe(data => {this.listScheduledShiftOnADay18 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(19).subscribe(data => {this.listScheduledShiftOnADay19 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(20).subscribe(data => {this.listScheduledShiftOnADay20 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(21).subscribe(data => {this.listScheduledShiftOnADay21 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(22).subscribe(data => {this.listScheduledShiftOnADay22 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(23).subscribe(data => {this.listScheduledShiftOnADay23 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(24).subscribe(data => {this.listScheduledShiftOnADay24 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(25).subscribe(data => {this.listScheduledShiftOnADay25 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(26).subscribe(data => {this.listScheduledShiftOnADay26 = data });
        this.scheduledShiftService.getScheduledShiftsByShiftId(27).subscribe(data => {this.listScheduledShiftOnADay27 = data });
    }
    deleteEmployee(id: number) {
        this.employeeService.deleteEmployee(id).subscribe({
            next: booking => this.message = "employee has been deleted",
            error: (err) => this.message = err
        });
        window.location.reload();
    }

    submitEmployee(employeeId: number, shiftId: number) {
        this.employeeService.getEmployeeById(employeeId).subscribe(
            (data) => {
                console.log(data); // Should be the exact same object that was saved.
                // Using the 2nd way, this will return an array with 1 item. So take the 0th element, ie data[0]
                this.employee = data; // data[0]
                this.shiftService.getShiftById(shiftId).subscribe(
                    (data1) => {
                        console.log(data1); // Should be the exact same object that was saved.
                        // Using the 2nd way, this will return an array with 1 item. So take the 0th element, ie data[0]
                        this.shift = data1; // data[0]
                        this.newScheduledShift = { employee: this.employee, shift: this.shift }
                        this.scheduledShiftService.addEmployeeToScheduledShift(this.newScheduledShift)
                    });
            });
    }
    removeEmployee(scheduledShiftId: number){
        this.scheduledShiftService.deleteScheduledShift(scheduledShiftId).subscribe({
            next: booking => this.message = "employee has been removed from the rota",
            error: (err) => this.message = err
        });
        window.location.reload();
    }
    openModal(shiftId: number){
        this.dialog.open(DialogScheduledShiftComponent, {data: {shiftId}});
    }
    onCloseHandled(){
        console.log("temp")
    }

    onLogout(): void {
        let poolData = {
          UserPoolId: environment.cognitoUserPoolId,
          ClientId: environment.cognitoAppClientId
        };
        let userPool = new CognitoUserPool(poolData);
        let cognitoUser = userPool.getCurrentUser();
        cognitoUser?.signOut();
        this.router.navigate(["signin"])
      }
}
