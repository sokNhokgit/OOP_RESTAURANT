import { Orderlist } from "./Orderlist";
export class OrderManagement {
    private ordermanagements:Orderlist[]=[];

    getOrdermanagement():Orderlist[]{
        return this.ordermanagements;
    }

    addOrderlist(orderlist:Orderlist){
        this.ordermanagements.push(orderlist);
    }
}



