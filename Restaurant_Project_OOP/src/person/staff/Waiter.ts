import { Gender } from "../Gender";
import { Staff } from "./Staff";

export class Waiter extends Staff{

    constructor(name: string, age: number, gender: Gender,phoneNumber:number){
        super(name, age, gender,phoneNumber);
    }

   
    isWaiter(waiter:Waiter):boolean{
        return this.getName() === waiter.getName() && this.getAge() === waiter.getAge() && this.getGender() === waiter.getGender();
    }
}