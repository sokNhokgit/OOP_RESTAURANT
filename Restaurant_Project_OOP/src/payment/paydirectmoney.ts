import { Order } from "../Order.ts/Order";
import { Pay } from "./pay";
export class Paydirectmoney extends Pay{
    constructor(amount:number, ordered: Order){
        super(amount,ordered)
    }

}