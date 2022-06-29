import { Datetime } from "../date/Datetime";
import { Food } from "../kitchen/Food";
import { OutsideCustomer } from "../person/customer/Customer";
import { Order } from "./Order";

export class Outsideorder extends Order{
    constructor(
        id:number, 
        foodorder:Food,
        numberofdishes:number,
        private date:Datetime,
        private customer:OutsideCustomer,
        ){
            super(id,foodorder,numberofdishes);
        }

}