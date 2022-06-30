import { Outsideorder } from "../Order.ts/Orderoutside";
import { OutsideCustomer } from "../person/customer/Customer";
import { Deliverer } from "./Deliverer";

export class Delivery{
    constructor(private deliverer:Deliverer, private food: Outsideorder, private customer: OutsideCustomer){}

    isEqualCustomer(other: OutsideCustomer){
        return this.customer.isEqual(other);
    }
}
