import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  rooturl = "http://localhost:8080/api/employees";

  constructor(private http:HttpClient) { }

  getEmployeeList(){
    return this.http.get(this.rooturl);
  }

  createEmployee(data:any){
    return this.http.post(this.rooturl,data);
  }

  getEmployeeById(id:Number){
    return this.http.get(`${this.rooturl}/${id}`)
  }

  updateEmployee(id:Number,data:any){
    return this.http.put(`${this.rooturl}/${id}`,data)
  }

  deleteEmployee(id:Number){
    return this.http.delete(`${this.rooturl}/${id}`)
  }
}
