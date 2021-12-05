import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../Services/employee.service';
import { Empolyee } from '../Shared/Empolyee';
import { JobType } from '../Shared/JobType';

@Component({
  selector: 'app-empolyees',
  templateUrl: './empolyees.component.html',
  styleUrls: ['./empolyees.component.scss']
})
export class EmpolyeesComponent implements OnInit {
  empolyees:Empolyee[]=[];
  Jobs=JobType;
  constructor(private _employeeService:EmployeeService, private router:Router) 
  {
    this._employeeService.GetAllEmployees().subscribe(data=>
      {
        this.empolyees=data
        console.log(data);
      });
  }

  ngOnInit(): void {
   
  }
  deleteEmpolyee(id: any)
  {
    console.warn(id);
    this._employeeService.DeleteEmployee(id).subscribe(data=>{
    this.empolyees=this.empolyees.filter(item=>item.Id !=id);
    console.log(data)
  });
  }
}
