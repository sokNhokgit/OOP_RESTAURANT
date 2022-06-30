import { Food } from "../kitchen/Food";
import { Outsideorder } from "../Order.ts/Orderoutside";
import { OutsideCustomer } from "../person/customer/Customer";
import { Deliverer } from "../person/deliverer/Deliverer";

export class Delivery{
    constructor(private deliverer:Deliverer, private foodOrder: Outsideorder, private customer: OutsideCustomer){}

    isEqualCustomer(other: OutsideCustomer){
        return this.customer.isEqual(other);
    }
}
