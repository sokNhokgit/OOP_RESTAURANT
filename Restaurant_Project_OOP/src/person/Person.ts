import { Gender } from "./Gender";

export abstract class Person {
    private people: Person[] = [];
    constructor(
        protected name:string, 
        protected age:number, 
        protected gender: Gender,
        protected phoneNumber: number,
    ) {}

    addPerson(person: Person){
        this.people.push(person);
    }
}