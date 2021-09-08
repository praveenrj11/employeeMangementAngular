import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'; 
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private empsrv: EmployeeService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  alert:boolean=false;

  addEmp = this.fb.group({
    firstName: [''],
    lastName: [''],
    emailId: [''],
  })

  savedata(){
    this.empsrv.createEmployee(this.addEmp.value).subscribe(result=>{
        console.log( "data saving", result)
        this.alert=true;
        this.addEmp.reset({})
        this.goToEmployeeList()
    })
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }
  closealert(){
    this.alert=false;
  }

}


