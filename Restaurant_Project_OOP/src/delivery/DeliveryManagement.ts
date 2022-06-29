import { OutsideCustomer } from "../person/customer/Customer";
import { Deliverer } from "./Deliverer";
import { Delivery } from "./Delivery";

export class DeliveryManagement{
    private deliveryList: Delivery[] = [];

    addDelivery(delivery: Delivery){
        this.deliveryList.push(delivery);
    }

    getAllDelivery(){
        return this.deliveryList;
    }

    getAllDeliveryByDeliverer(deliverer: Deliverer){
        let deliveries = [];
        for(let delivery of this.deliveryList){
            if(delivery['deliverer'].isEqualDeliverer(deliverer)){
                deliveries.push(delivery);
            }
        }
        if(deliveries.length>0){
            return deliveries;
        }else{
            return undefined;
        }
    }

    getAllDeliveryByCustomer(customer: OutsideCustomer){
        let deliveries = [];
        for(let delivery of this.deliveryList){
            if(delivery['customer'].isEqual(customer)){
                deliveries.push(delivery);
            }
        }
        if(deliveries.length>0){
            return deliveries;
        }else{
            return undefined;
        }
    }
}