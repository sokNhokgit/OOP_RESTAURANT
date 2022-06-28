import { Datetime } from "../date/Datetime";
import { Food } from "../kitchen/Food";
import { Paybybankaccount } from "../payment/paybybankaccount";
import { Paydirectmoney } from "../payment/paydirectmoney";
export class Order {
    constructor(
        private id:number,
        private foodorder:Food,
        private numberofdishes:number,
        ){}

        getfoodOrder():Food{
            return this.foodorder;
        }

        getid():number{
            return this.id;
        }
        getFood():Food{
            return this.foodorder;
        }
        getNumberofdishes():number{
            return this.numberofdishes;
        }

        equalOrder(order:Order){
            return  this.id === order.getid() &&
                    this.numberofdishes === order.numberofdishes &&
                    this.foodorder.equalFood(order.getfoodOrder());
        }
        
}