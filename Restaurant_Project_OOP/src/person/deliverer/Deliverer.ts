import { Gender } from "../Gender";
import { Person } from "../Person";

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

    isEqualVehicle(other: Vehicle){
        return this.vehicle == other;
    }

    isEqualDeliverer(other: Deliverer){
        return this.name==other.name && this.age==other.age && this.gender==other.gender && this.phoneNumber==other.phoneNumber;
    }
}