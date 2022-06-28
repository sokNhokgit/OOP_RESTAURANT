import { InsideCustomer, OutsideCustomer } from "./customer/Customer";
import { Gender } from "./Gender";
import { Staff } from "./staff/Staff";
import { StaffCategory } from "./staff/StaffCategories";

export class PersonManagement{
    private staffs: Staff[] = [];
    private insideCustomers: InsideCustomer[] = [];
    private outsideCustomer: OutsideCustomer[] = [];

    addStaff(staff: Staff){
        this.staffs.push(staff);
    }
    
    getAllStaff(){
        return this.staffs;
    }

    getAllStaffBySalary(salary: number){

    }

    getOnlyStaffCategory(staffCategory: StaffCategory){
        let customers:Staff[] = [];
        let AllCutomers = this.getAllStaff();
        AllCutomers.forEach(customer => {
            if(customer.isEqual(staffCategory)){
                customers.push(customer);
            }
        });
        return customers;
    }

    addInsideCustomer(customer: InsideCustomer){
        this.insideCustomers.push(customer);
    }

    getAllInsideCustomer(){
        return this.insideCustomers;
    }
    
    addOutsideCustomer(customer: OutsideCustomer){
        this.outsideCustomer.push(customer);
    }
    
    getAllOutsideCustomer(){
        return this.outsideCustomer;
    }
}