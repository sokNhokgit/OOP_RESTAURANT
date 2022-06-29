import { Gender } from "../Gender";
import { Staff } from "./Staff";


export class Cleaner extends Staff{

    constructor(name: string, age: number, gender: Gender,phoneNumber:number){
        super(name, age, gender,phoneNumber);
    }
}