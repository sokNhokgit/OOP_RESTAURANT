import { Food } from "../kitchen/Food";
import { Outsideorder } from "../Order.ts/Orderoutside";
import { OutsideCustomer } from "../person/customer/Customer";
import { Deliverer } from "./Deliverer";

export class Delivery{
    constructor(private deliverer:Deliverer, private food: Outsideorder){}
}