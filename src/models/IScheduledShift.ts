import { IEmployee } from "./IEmployee";
import { IShift } from "./IShift";

export interface IScheduledShift {
    scheduledShiftId: number,
    employee: IEmployee,
    shift: IShift
  }