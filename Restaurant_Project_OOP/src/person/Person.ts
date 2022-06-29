import { Gender } from "./Gender";

export abstract class Person {

    constructor(
        private name:string, 
        private age:number, 
        private gender: Gender,
    ) {}



    getName():string{
        return this.name;
    }

    getAge():number{
        return this.age;
    }

    getGender():Gender{
        return this.gender;
    }
}