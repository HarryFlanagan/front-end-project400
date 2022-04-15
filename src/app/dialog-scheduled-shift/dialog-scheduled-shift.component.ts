import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IEmployee } from 'src/models/IEmployee';
import { IScheduledShift } from 'src/models/IScheduledShift';
import { IShift } from 'src/models/IShift';
import { EmployeeService } from 'src/services/employee.service';
import { ScheduledShiftService } from 'src/services/scheduled-shift.service';
import { ShiftService } from 'src/services/shift.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-scheduled-shift',
  templateUrl: './dialog-scheduled-shift.component.html',
  styleUrls: ['./dialog-scheduled-shift.component.css']
})
export class DialogScheduledShiftComponent implements OnInit {


    listEmployees: any;
    listScheduledShift: any;
    selectedValue: any;
    message: string;
    selectedEmployee: any;
    display = "none";

  constructor(private employeeService: EmployeeService, private shiftService: ShiftService, private scheduledShiftService: ScheduledShiftService,  @Inject(MAT_DIALOG_DATA) public shiftIdInject, private router: Router) { }

  @Input() employee: IEmployee;
  @Input() shift: IShift;
  @Input() scheduledShift: IScheduledShift;

  employeeForm: FormGroup;
  newEmployee: IEmployee;
  newScheduledShift: IScheduledShift;
    selectedShiftId: any;
  @Output() employeeFormClose = new EventEmitter<IEmployee>();

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => { this.listEmployees = data });
    this.scheduledShiftService.getScheduledShifts().subscribe(data => { this.listScheduledShift = data });
    this.selectedShiftId = Object.values(this.shiftIdInject)
    console.log(this.selectedShiftId[0])
  }
  submitEmployee(employeeId: number) {
    this.employeeService.getEmployeeById(employeeId).subscribe(
        (data) => {
            console.log(data); // Should be the exact same object that was saved.
            // Using the 2nd way, this will return an array with 1 item. So take the 0th element, ie data[0]
            this.employee = data; // data[0]
            this.shiftService.getShiftById(this.selectedShiftId).subscribe(
                (data1) => {
                    console.log(data1); // Should be the exact same object that was saved.
                    // Using the 2nd way, this will return an array with 1 item. So take the 0th element, ie data[0]
                    this.shift = data1; // data[0]
                    this.newScheduledShift = { employee: this.employee, shift: this.shift }
                    this.scheduledShiftService.addEmployeeToScheduledShift(this.newScheduledShift)
                });
        });
        setTimeout(location.reload.bind(location), 100);   
}

}
