import { Datetime } from "../date/Datetime";
import { OutsideCustomer } from "../person/customer/Customer";
import { Table } from "../table/Table";

export class Booking{
    constructor(private table:number, private chairNumber: number, private customer: OutsideCustomer, private bookDate:Datetime, private comeDate: Datetime){}
}