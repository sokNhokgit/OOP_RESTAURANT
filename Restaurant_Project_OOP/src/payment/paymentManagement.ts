import { Datetime } from "../date/Datetime";
import { Order } from "../Order.ts/Order";
import { Insideorder } from "../Order.ts/Orderinside";
import { Outsideorder } from "../Order.ts/Orderoutside";
import { Pay } from "./pay";

export class PaymentManagement {
    private pays:Pay[]=[];

    addPay(pay:Pay){
        this.pays.push(pay);
    }

    getPays():Pay[]{
        return this.pays;
    }

    isOrdergetPaid(order:Order){
        let orderisPaid = false;
        let pays= this.pays;
        for (let i=0;i<pays.length;i++){
            if (pays[i].getOrder().isEqual(order)){
                orderisPaid = true;
            }
        }
        return orderisPaid;
    }

    getDayRevenue(date:Datetime):number{
        let totalpayprice =0;
        let pays = this.pays;
        for (let i=0;i<pays.length;i++){
            let pay = pays[i].getOrder() as Insideorder || Outsideorder;
            if (pay.getDate().isEqual(date)){
                totalpayprice += pay.orderTotalPrice();
            }
        }
        return totalpayprice;
    }

    getRevenue():number{
        let totalpayprice =0;
        let pays = this.pays;
        for (let i=0;i<pays.length;i++){
            let pay = pays[i].getOrder() as Insideorder || Outsideorder;
            totalpayprice += pay.orderTotalPrice();
        }
        return totalpayprice;
    }


}