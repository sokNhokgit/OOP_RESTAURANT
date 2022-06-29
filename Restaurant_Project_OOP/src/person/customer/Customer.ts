import { Contact } from "../Contact";
import { Gender } from "../Gender";
import { Location } from "../../Location";
import { Person } from "../Person";


export class OutsideCustomer extends Person{
    constructor(name: string, age: number, gender: Gender,phoneNumber: number, private location: Location){
        super(name, age, gender, phoneNumber);
    }

    getCustomerLocation(){
        return this.location;
    }

    isEqual(other:OutsideCustomer){
        return this.name==other.name && this.age==other.age && this.gender==other.gender && this.phoneNumber==other.phoneNumber && this.location==other.location;
    }
}



export class InsideCustomer{
    constructor(private cusomerID : number){}
}

