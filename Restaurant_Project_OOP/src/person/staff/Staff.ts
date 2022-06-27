import { Gender } from "../Gender";
import { Person } from "../Person";
import { StaffCategory } from "./StaffCategories";

export abstract class Staff extends Person{
    private salary: number = 0;
    constructor(private staffCategory: StaffCategory, name: string, age: number, gender:Gender, phoneNumber: number){
        super (name, age, gender, phoneNumber);
    }

    isEqual(other: StaffCategory){
        return this.staffCategory == other;
    }

    setSalary(salary: number){
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }
}