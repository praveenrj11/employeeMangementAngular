import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private empsrv: EmployeeService,
    private acroute: ActivatedRoute,
    private router: Router) { }

  updateEmp = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailId: new FormControl('')

  })

  alert: boolean = false;

  ngOnInit(): void {
    this.empsrv.getEmployeeById(this.acroute.snapshot.params.id)
      .subscribe((result: any) => {
        console.log("result", result);
        this.updateEmp = new FormGroup({
          firstName: new FormControl(result["firstName"]),
          lastName: new FormControl(result["lastName"]),
          emailId: new FormControl(result["emailId"])
        })
      })
  }

  updatedata() {
    this.empsrv.updateEmployee(this.acroute.snapshot.params.id, this.updateEmp.value).subscribe((result) => {
      console.log("data ::::: ", result)
      this.alert = true;
      this.goToEmployeeList()
    })
  }

  closealert() {
    this.alert = false;
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }
}

