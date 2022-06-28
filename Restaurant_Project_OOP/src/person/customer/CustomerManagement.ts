import { InsideCustomer, OutsideCustomer } from "./Customer";

export class CustomerManagement{
    private insideCustomer:InsideCustomer[] = [];
    private outsideCustomer: OutsideCustomer[] = [];

    getOutsideCustomer(){
        return this.outsideCustomer;
    }

    getInsideCustomer(){
        return this.insideCustomer;
    }


    addOutsideCustomer(customer: OutsideCustomer){
        this.outsideCustomer.push(customer);
    }

    addInsideCustomer(customer: InsideCustomer){
        this.insideCustomer.push(customer);
    }
}