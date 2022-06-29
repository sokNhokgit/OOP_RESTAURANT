import { Gender } from "./Gender";

export abstract class Person {
    constructor(
        protected name:string, 
        protected age:number, 
        protected gender: Gender,
        protected phoneNumber: number,
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