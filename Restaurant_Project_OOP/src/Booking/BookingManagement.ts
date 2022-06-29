import { Datetime } from "../date/Datetime";
import { OutsideCustomer } from "../person/customer/Customer";
import { Booking } from "./Booking";


export class BookingManagement{
    private bookingList:Booking[] = [];

    addBooking(booking:Booking){
        this.bookingList.push(booking);
    }

    getAllBooking(){
        return this.bookingList;
    }

    getBookingByCustomer(customer: OutsideCustomer){
        for(let booking of this.bookingList){
            if(booking['customer'].isEqual(customer)){
                return booking;
            }
        }
        return undefined;
    }

    getAllBookingByCustomer(customer: OutsideCustomer){
        let listOfBooking = [];
        for(let booking of this.bookingList){
            if(booking['customer'].isEqual(customer)){
                listOfBooking.push(booking);
            }
        }
        if(this.bookingList.length>0){
            return listOfBooking;
        }
        else{
            return undefined;
        }
    }

    concellOneBooking(customer:OutsideCustomer, dateBook: Datetime){
        let listOfBooking = [];
        for(let i=0; i<this.bookingList.length; i++){
            if(this.bookingList[i]['customer'].isEqual(customer) && this.bookingList[i]['bookDate'].isEqual(dateBook)){
                listOfBooking.push(i);
            }
        }
        if(listOfBooking.length>0){
            this.bookingList.splice(listOfBooking[0], 1);
        }else{
            return undefined;
        }
    }

    concellAllBooking(customer:OutsideCustomer){
        let listOfBooking = [];
        for(let i=0; i<this.bookingList.length; i++){
            if(this.bookingList[i]['customer'].isEqual(customer)){
                listOfBooking.push(i);
            }
        }
        if(listOfBooking.length>0){
            for(let booking of listOfBooking){
                this.bookingList.splice(booking, 1);
            }
        }
    }
}