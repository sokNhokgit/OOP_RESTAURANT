import { Gender } from "../Gender";
import { Location } from "../Location";
import { Person } from "../Person";


export class OutsideCustomer extends Person{
    constructor(name: string, age: number, gender: Gender, private address: Location){
        super(name, age, gender);
    }

    getCustomerAddress(){
        return this.address;
    }
}



export class InsideCustomer{
    constructor(private cusomerID : number){}
}

