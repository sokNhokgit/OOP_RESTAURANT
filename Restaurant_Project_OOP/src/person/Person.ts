import { Gender } from "./Gender";

export abstract class Person {
    constructor(
        protected name:string, 
        protected age:number, 
        protected gender: Gender,
        protected phoneNumber: number,
    ) {}

}