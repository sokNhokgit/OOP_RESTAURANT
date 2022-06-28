import { Order } from "../Order.ts/Order";
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
            if (pays[i].getOrder().equalOrder(order)){
                orderisPaid = true;
            }
        }
        return orderisPaid;
    }
}