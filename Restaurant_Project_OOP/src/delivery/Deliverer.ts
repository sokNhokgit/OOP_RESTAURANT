import { Gender } from "../person/Gender";
import { Person } from "../person/Person";


export enum Vehicle{
    CAR,
    MOTORCYCLE,
    BIKE,
    TOKTOK,
}

export class Deliverer extends Person{
    constructor(name: string, age: number, gender: Gender, phoneNumber: number, private vehicle: Vehicle){
        super(name, age, gender, phoneNumber);
    }

    isEqual(other: Vehicle){
        return this.vehicle == other;
    }
}