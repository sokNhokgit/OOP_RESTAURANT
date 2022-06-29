import { Order } from "../Order.ts/Order";

export class Pay {
    constructor(private amount:number, private ordered:Order){}

    getOrder():Order{
        return this.ordered;
    }
}