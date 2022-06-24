import { InsideCustomer, OutsideCustomer } from "./Customer";

export class CustomerManagement{
    private insideCustomer:InsideCustomer[] = [];
    private outsideCustomer: OutsideCustomer[] = [];

    addInsideCustomer(customer: InsideCustomer){
        this.insideCustomer.push(customer);
    }

    getInsideCustomer(){
        return this.insideCustomer;
    }


    addOutsideCustomer(customer: OutsideCustomer){
        this.outsideCustomer.push(customer);
    }

    getOutsideCustomer(){
        return this.outsideCustomer;
    }
}