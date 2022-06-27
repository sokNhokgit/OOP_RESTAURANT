import { Outsideorder } from "./Orderoutside";
import { Insideorder } from "./Orderinside";
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
}



