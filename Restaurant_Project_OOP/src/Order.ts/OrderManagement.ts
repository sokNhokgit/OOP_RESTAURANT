import { Outsideorder } from "./Orderoutside";
import { Insideorder } from "./Orderinside";
import { Waiter } from "../person/staff/Waiter";
export class OrderManagement {
    private listinside:Insideorder[]=[];
    private listoutside:Outsideorder[]=[];

    getOrderinside():Insideorder[]{
        return this.listinside;
    }

    addOrderinside(order:Insideorder){
        this.listinside.push(order);
    }

    getOrderoutside():Outsideorder[]{
        return this.listoutside;
    }

    addOrderoutside(order:Outsideorder){
        this.listoutside.push(order);
    }

    private getWaiterresponselist(waiter:Waiter):Insideorder[]{
        let orderInlist = this.listinside;
        let orders:Insideorder[]=[];
        for (let i=0;i<orderInlist.length;i++){
            if (orderInlist[i].getWaiter().isWaiter(waiter)){
                orders.push(orderInlist[i])
            }
        }
        return orders;
    }
    getWaiterresponse(waiter:Waiter):number{
        let allwaiterresponse = this.getWaiterresponselist(waiter);
        return allwaiterresponse.length;
    }
}



