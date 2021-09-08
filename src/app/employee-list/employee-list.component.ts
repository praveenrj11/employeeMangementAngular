import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:any;
  
  constructor(private empsrv: EmployeeService) { }

  ngOnInit(): void {
    this.empsrv.getEmployeeList().subscribe(result=>{
      console.log("result :::: ",result)
      this.employees=result;
    })
  }

  deleteEmp(id:any) {
    this.employees.splice(id-1,1)
    this.empsrv.deleteEmployee(id).subscribe((result) =>{
      console.log("Deleted :: ", result)
    })
  }

}
