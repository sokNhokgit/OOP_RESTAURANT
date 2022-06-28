import { Order } from "./Order";
import { InsideCustomer } from "../person/customer/Customer";
import { Food } from "../kitchen/Food";
import { Datetime } from "../date/Datetime";


export class Insideorder extends Order{
    constructor(
        id:number,
        foododer:Food,
        numberofdishes:number,
        private customer:InsideCustomer
        ){
            super(id,foododer,numberofdishes)
        }

}