import { Gender } from "../Gender";
import { Staff } from "./Staff";
import { StaffCategory } from "./StaffCategories";

export class Waiter extends Staff{

    constructor(name: string, age: number, gender: Gender,phoneNumber:number, staffCategory: StaffCategory){
        super(staffCategory, name, age, gender, phoneNumber);
    }
}