import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Empolyee } from 'src/app/Shared/Empolyee';

@Component({
  selector: 'app-update-empolyee',
  templateUrl: './update-empolyee.component.html',
  styleUrls: ['./update-empolyee.component.scss']
})
export class UpdateEmpolyeeComponent implements OnInit {
  EmpolyeeData!: Empolyee;
  ImageUrl: any= "http://localhost:57193/Content/Imgs/Empolyees/"
  id!:number;
  fileToUpload!: File
  image!:string
  eorrors!:string

  constructor(private _activeRouter:ActivatedRoute,
    private _router: Router,private _EmployeeService:EmployeeService) { }
    

  ngOnInit(): void {
    console.warn(this._activeRouter.snapshot.params['id']);
    this.id=parseInt(this._activeRouter.snapshot.params['id']);
    this._EmployeeService.getEmployeeById(this._activeRouter.snapshot.params['id']).subscribe((data)=>{
      this.EmpolyeeData=data;
      this.ImageUrl += data.Image
      this.image=data.Image
      console.log(data);
    });
    }
  
  fileHandle(file: any) {
    this.fileToUpload = file.files.item(0)

    var filereader = new FileReader();
    filereader.onload = (event) => {
      this.ImageUrl = event.target?.result;

    }
    filereader.readAsDataURL(this.fileToUpload)
  }
  onSubmit()
  {
    //alert("submit");
    if(this.fileToUpload!=null)
    {
      this.EmpolyeeData.imageFile=this.fileToUpload;
    }else
    {
      this.EmpolyeeData.Image=this.image;
    }
    if(this.EmpolyeeData.Name==null||this.EmpolyeeData.Salary<=0||this.EmpolyeeData.SSN==null||this.EmpolyeeData.Name.length<3)
    {
      this.eorrors="please fill all data Fields (Name,Salary,SSN) valid First";
      return;
    }
    
    this._EmployeeService.UpdateEmployee(this.EmpolyeeData).subscribe(data=>
      {
        this._router.navigate(['empolyee']);
      },error=>
        {
          console.log(error)
        });
  }
 

}
