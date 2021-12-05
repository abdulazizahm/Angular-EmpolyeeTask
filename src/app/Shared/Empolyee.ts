import { JobType } from "./JobType";

export class Empolyee{
    constructor(  
        public Id:number,
        public Name: string,
        public SSN:string,
        public Address:string,
        public Salary: number,
        public Image: string,
        public Date_hired:Date,
        public  Job:number,
        public imageFile: File|null ,
        public User_ID?: string
    ){}
}