import { Food } from "../kitchen/Food";

export class Order {
    constructor(private id:number, private customerid:number,private foodorder:Food,private numberofdishes:number){}
    // need to update when pull code 
    // change from customer id to customer
}