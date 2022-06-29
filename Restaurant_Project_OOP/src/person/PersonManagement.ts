import { InsideCustomer, OutsideCustomer } from "./customer/Customer";
import { Staff } from "./staff/Staff";

export class PersonManagement{
    private staffs: Staff[] = [];
    private insideCustomers: InsideCustomer[] = [];
    private outsideCustomer: OutsideCustomer[] = [];

    addStaff(staff: Staff){
        this.staffs.push(staff);
    }
    
    getAllStaff():Staff[]{
        return this.staffs;
    }
    getsaff(staff: Staff){
        let customers:Staff[] = [];
        let AllCutomers = this.getAllStaff();
        AllCutomers.forEach(customer => {
            if(customer.isEqual(staff)){
                customers.push(customer);
            }
        });
        return customers;
    }

    addInsideCustomer(customer: InsideCustomer){
        this.insideCustomers.push(customer);
    }

    getAllInsideCustomer():InsideCustomer[]{
        return this.insideCustomers;
    }
    
    addOutsideCustomer(customer: OutsideCustomer){
        this.outsideCustomer.push(customer);
    }
    
    getAllOutsideCustomer(){
        return this.outsideCustomer;
    }
}