import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
{
  path:'employees',
  component:EmployeeListComponent
},
{
  path:'add-employee',
  component:AddEmployeeComponent
},
{
  path:'update/:id',
  component:UpdateEmployeeComponent
},
{
  path:'',
  redirectTo:'employees',
  pathMatch:'full'
}





];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
