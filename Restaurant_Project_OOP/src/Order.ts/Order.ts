import { Datetime } from "../date/Datetime";
import { OrderCategory } from "./Ordercategory";
export class Order {

    constructor(
        private id:number,
        private category:OrderCategory,
        private date:Datetime,
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

    getDate():Datetime{
        return this.date;
    }
}