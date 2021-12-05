import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Empolyee } from 'src/app/Shared/Empolyee';
import { JobType } from 'src/app/Shared/JobType';

@Component({
  selector: 'app-add-empolyee',
  templateUrl: './add-empolyee.component.html',
  styleUrls: ['./add-empolyee.component.scss']
})
export class AddEmpolyeeComponent implements OnInit {
  EmpolyeeData!: Empolyee; 
  
  imageUrl: any = "./assets/images/default.jpg"
  fileToUpload!: File
  eorrors: string = '';
  Jobs=JobType;

  
  constructor(private _EmployeeService:EmployeeService,private router:Router) {
    this.EmpolyeeData=new Empolyee(0,"","","",0,"",new Date(),0,null);
  }


 

  ngOnInit(): void {
  }

  fileHandle(file: any) {
    this.fileToUpload = file.files.item(0)

    var filereader = new FileReader();
    filereader.onload = (event) => {
      this.imageUrl = event.target?.result;

    }
    filereader.readAsDataURL(this.fileToUpload)
  }
  onSubmit() { 
    //alert(this.EmpolyeeData.Date_hired);
    this.EmpolyeeData.imageFile=this.fileToUpload;
    if(this.EmpolyeeData.Name==null||this.EmpolyeeData.Salary<=0||this.EmpolyeeData.SSN==null||this.EmpolyeeData.Name.length<3)
    {
      this.eorrors="please fill all data Fields (Name,Salary,SSN) valid First";
      return;
    }
    this._EmployeeService.AddEmployee(this.EmpolyeeData).subscribe((data) => {
     this.router.navigate(['/empolyee']);
    }, (error)=> {this.eorrors=error.error.error_description;console.log(error.error)});
  }

}
