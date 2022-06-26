import { Gender } from "./Gender";

export abstract class Person {
    private people: Person[] = [];
    constructor(
        private name:string, 
        private age:number, 
        private gender: Gender,
    ) {}

    addPerson(person: Person){
        this.people.push(person);
    }
}