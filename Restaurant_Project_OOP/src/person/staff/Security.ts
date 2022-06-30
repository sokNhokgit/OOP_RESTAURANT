import { Gender } from "../Gender";
import { Staff } from "./Staff";
import { StaffCategory } from "./StaffCategories";


export class Security extends Staff{

    constructor(name: string, age: number, gender: Gender,phoneNumber:number){
        super(name, age, gender,phoneNumber, StaffCategory.SECURITY);
    }
}