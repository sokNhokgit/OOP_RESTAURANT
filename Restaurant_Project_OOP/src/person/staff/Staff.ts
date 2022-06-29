import { Gender } from "../Gender";
import { Person } from "../Person";
import { StaffCategory } from "./StaffCategories";

export abstract class Staff extends Person{
    isEqual(staffCategory: StaffCategory) {
        throw new Error("Method not implemented.");
    }
    private salary: number = 0;
    constructor( name: string, age: number, gender:Gender){
        super (name, age, gender);
    }



    setSalary(salary: number){
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }
}