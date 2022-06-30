import { Datetime } from "../date/Datetime";
import { OutsideCustomer } from "../person/customer/Customer";

export class Booking{
    constructor(private table:number, private chairNumber: number, private customer: OutsideCustomer, private bookDate:Datetime, private comeDate: Datetime){}
}