import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { CreateRotaComponent } from './create-rota/create-rota.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthService } from './auth/auth.service';

const routes: Routes = [
    { path: '', component: CreateRotaComponent},
    { path: 'employees', component: AllEmployeesComponent},
    { path: 'create', component: CreateEmployeeComponent},
    { path: 'signin', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
