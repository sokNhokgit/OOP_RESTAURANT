import { Datetime } from "../date/Datetime";
import { Food } from "../kitchen/Food";
import { Paybybankaccount } from "../payment/paybybankaccount";
import { Paydirectmoney } from "../payment/paydirectmoney";
import { Waiter } from "../person/staff/Waiter";
import { OrderCategory } from "./Ordercategory";
export class Order {

    constructor(
        private id:number,
        private category:OrderCategory,
    ){}

    getCategory():OrderCategory{
        return this.category;
    }

    getId():number{
        return this.id;
    }

    
    isEqual(order:Order){
        return this.id === order.id && this.category === order.category;
    }
}