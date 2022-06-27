import { Contact } from "../Contact";
import { Gender } from "../Gender";
import { Location } from "../../Location";
import { Person } from "../Person";


export class OutsideCustomer extends Person{
    constructor(name: string, age: number, gender: Gender,phoneNumber: number, private location: Location,){
        super(name, age, gender, phoneNumber);
    }

    getCustomerLocation(){
        return this.location;
    }
}



export class InsideCustomer{
    constructor(private cusomerID : number){}
}

