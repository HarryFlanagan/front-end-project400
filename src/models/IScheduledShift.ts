import { IEmployee } from "./IEmployee";
import { IShift } from "./IShift";

export interface IScheduledShift {
    employee: IEmployee,
    shift: IShift
  }