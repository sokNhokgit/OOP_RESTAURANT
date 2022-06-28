import { Order } from "../Order.ts/Order";
import { Pay } from "./pay";
export class Paybybankaccount extends Pay{
    
    constructor(private cardnumber:string,amount:number,ordered:Order){
        super(amount,ordered)
    }
    
}