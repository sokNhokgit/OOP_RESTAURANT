import { Order } from "./Order";
import { InsideCustomer } from "../person/customer/Customer";
import { Food } from "../kitchen/Food";
import { Waiter } from "../person/staff/Waiter";


export class Insideorder extends Order{
    constructor(
        id:number,
        foododer:Food,
        numberofdishes:number,
        private waiter:Waiter,
        private customer:InsideCustomer
        ){
            super(id,foododer,numberofdishes)
        }

        getWaiter():Waiter{
            return this.waiter;
        }
}