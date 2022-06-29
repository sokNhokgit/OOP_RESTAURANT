import { Gender } from "../Gender";
import { Staff } from "./Staff";
import { StaffCategory } from "./StaffCategories";

export class Waiter extends Staff{

    constructor(name: string, age: number, gender: Gender){
        super(name, age, gender);
    }

   
    isWaiter(waiter:Waiter):boolean{
        return this.getName() === waiter.getName() && this.getAge() === waiter.getAge() && this.getGender() === waiter.getGender();
    }
}