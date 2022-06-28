import { Order } from "../Order.ts/Order";
import { Pay } from "./pay";
export class Paydirectmoney extends Pay{
    constructor(amount:number, ordered: Order){
        super(amount,ordered)
    }

    pay(amount:number,order:Order){
        if (order.getfoodOrder().getPrice()===amount){
            
        }
    }
}