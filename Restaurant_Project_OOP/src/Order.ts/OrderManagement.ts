import { Insideorder } from "./Orderinside";
import { Waiter } from "../person/staff/Waiter";
import { Order } from "./Order";
import { OrderCategory } from "./Ordercategory";
export class OrderManagement {
    private orders:Order[]=[];

    getOrder():Order[]{
        return this.orders;
    }

    addOrder(order:Order){
        this.orders.push(order);
    }

    getOnlyinsideOrder(){
        let orders = this.orders;
        let orderIN=[];
        for (let i=0;i<orders.length;i++){
            if (orders[i].getCategory()===OrderCategory.INSIDE_ORDER){
                orderIN.push(orders[i]);
            }
        }
        return orderIN;
    }
    private getWaiterresponselist(waiter:Waiter):Insideorder[]{
        let orderInlist = this.getOnlyinsideOrder();
        let orders:Insideorder[]=[];
        for (let i=0;i<orderInlist.length;i++){
            let order = orderInlist[i] as Insideorder;
            if (order.getWaiter().isWaiter(waiter)){
                orders.push(order)
            }
        }
        return orders;
    }
    getWaiterresponse(waiter:Waiter):number{
        let allwaiterresponse = this.getWaiterresponselist(waiter);
        return allwaiterresponse.length;
    }

}



