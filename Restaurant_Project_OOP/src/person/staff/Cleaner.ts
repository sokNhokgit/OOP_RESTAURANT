import { Gender } from "../Gender";
import { Staff } from "./Staff";
import { StaffCategory } from "./StaffCategories";


export class Cleaner extends Staff{

    constructor(name: string, age: number, gender: Gender){
        super(name, age, gender);
    }
}