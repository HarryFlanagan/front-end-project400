import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IEmployee } from 'src/models/IEmployee';
import { IShift } from 'src/models/IShift';
import { IScheduledShift } from 'src/models/IScheduledShift';
import { EmployeeService } from 'src/services/employee.service';
import { ShiftService } from 'src/services/shift.service';
import { ScheduledShiftService } from 'src/services/scheduled-shift.service';
import * as _ from 'lodash';

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
    

  constructor(private employeeService: EmployeeService, private shiftService: ShiftService, private scheduledShiftService: ScheduledShiftService) { }

  @Input() employee : IEmployee;
  @Input() shift : IShift;
  @Input() scheduledShift : IScheduledShift;

  @Output() employeeFormClose = new EventEmitter<IEmployee>();
  
  employeeForm: FormGroup;
  newEmployee: IEmployee;
  newScheduledShift: IScheduledShift;

   /*Crete Employee Form Infomation*/
   get employeeId() {
      return this.employeeForm.get('employeeId');
    }
    
  getDropDownText(id, object){
    const selObj = _.filter(object, function (o) {
        return (_.includes(id,o.id));
    });
    return selObj;
  }

  selectEmployee(employee: IEmployee): void{
    this.selectedEmployee = employee;
    console.log(employee.firstName)
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data =>{this.listEmployees = data});
    this.scheduledShiftService.getScheduledShifts().subscribe(data =>{this.listScheduledShift = data});
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe({
        next: booking => this.message = "employee has been deleted",
        error: (err) => this.message = err
      });
      window.location.reload();
  }

  submitEmployee(employeeId: number) {
      this.employeeService.getEmployeeById(employeeId).subscribe(
        (data)=>{
          console.log(data); // Should be the exact same object that was saved.
          // Using the 2nd way, this will return an array with 1 item. So take the 0th element, ie data[0]
          this.employee = data; // data[0]
          this.shiftService.getShiftById(1).subscribe(
            (data1)=>{
              console.log(data1); // Should be the exact same object that was saved.
              // Using the 2nd way, this will return an array with 1 item. So take the 0th element, ie data[0]
              this.shift = data1; // data[0]
              this.newScheduledShift = {scheduledShiftId: 155, employee: this.employee, shift: this.shift}
              this.scheduledShiftService.addEmployeeToScheduledShift(this.newScheduledShift)
           });
       });
 
       
       
}
}
