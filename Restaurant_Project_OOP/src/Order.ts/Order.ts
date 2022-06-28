import { Food } from "../kitchen/Food";
export class Order {
    constructor(
        private id:number,
        private foodorder:Food,
        private numberofdishes:number
        ){}
}