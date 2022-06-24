import { Gender } from "../Gender";
import { Location } from "../Location";
import { Person } from "../Person";


export class OutsideCustomer extends Person{
    constructor(name: string, age: number, gender: Gender, private location: Location){
        super(name, age, gender);
    }

    getCustomerLocation(){
        return this.location;
    }
}



export class InsideCustomer{
    constructor(private cusomerID : number){}
}

