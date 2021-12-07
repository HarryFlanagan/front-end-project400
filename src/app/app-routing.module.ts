import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
    { path: '', component: EmployeeComponent},
    { path: 'create', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
