import { Gender } from "../Gender";
import { Person } from "../Person";

export abstract class Staff extends Person{
    
    private salary: number = 0;
    constructor( name: string, age: number, gender:Gender,phoneNumber:number){
        super (name, age, gender,phoneNumber);
    }



    setSalary(salary: number){
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }

    isEqual(staff:Staff):boolean{
        return this.name === staff.name && this.age === staff.age && this.gender === this.gender && this.phoneNumber === this.phoneNumber;
    }
}