import { Gender } from "./Gender";

export abstract class Person {
    constructor(
        private name:string, 
        private age:number, 
        private gender: Gender,
    ) {}
}