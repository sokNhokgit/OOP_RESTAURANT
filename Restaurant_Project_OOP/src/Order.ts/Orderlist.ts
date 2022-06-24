import { Order } from "./Order";
export class Orderlist {
    private orderlist:Order[]=[];
    constructor(private tableid:number){}
    getOrderlist():Order[]{
        return this.orderlist;
    }

    addOrder(order:Order){
        this.orderlist.push(order)
    }
}



