import { Outsideorder } from "../Order.ts/Orderoutside";
import { Deliverer } from "./Deliverer";

export class Delivery{
    constructor(private deliverer:Deliverer, private response: Outsideorder){}
}