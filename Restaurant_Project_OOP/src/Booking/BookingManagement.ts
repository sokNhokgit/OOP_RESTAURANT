import { Datetime } from "../date/Datetime";
import { OutsideCustomer } from "../person/customer/Customer";
import { Booking } from "./Booking";


export class BookingManagement{
    private bookingList:Booking[] = [];
    private listOfBookingConcel:Booking[] = [];

    restartdata(){
        this.bookingList = [];
        this.listOfBookingConcel = [];
    }

    countAllBooking(){
        return this.bookingList.length;
    }

    addBooking(booking:Booking){
        this.bookingList.push(booking);
    }

    getAllBooking(){
        return this.bookingList;
    }

    getOneBookingByCustomer(customer: OutsideCustomer){
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

    concellBooking(customer:OutsideCustomer, dateBook: Datetime){
        for(let booking of this.bookingList){
            if(booking['customer'].isEqual(customer) && booking['bookDate'].isEqual(dateBook)){
                this.addBookingConcel(booking);
            }
        }
    }

    addBookingConcel(bookingConcell: Booking){
        this.listOfBookingConcel.push(bookingConcell);
    }

    getAllBookingConcel(){
        return this.listOfBookingConcel;
    }

    getAllBookingConcellByCustomer(customer: OutsideCustomer){
        let listOfBookingConcel = [];
        for(let booking of this.bookingList){
            if(booking['customer'].isEqual(customer)){
                listOfBookingConcel.push(booking);
            }
        }
        if(this.bookingList.length>0){
            return listOfBookingConcel;
        }
        else{
            return undefined;
        }
    }
    // concellAllBooking(customer:OutsideCustomer){
    //     let listOfBooking = [];
    //     for(let i=0; i<this.bookingList.length; i++){
    //         if(this.bookingList[i]['customer'].isEqual(customer)){
    //             listOfBooking.push(i);
    //         }
    //     }
    //     if(listOfBooking.length>0){
    //         for(let booking of listOfBooking){
    //             this.bookingList.splice(booking, 1);
    //         }
    //     }
    // }
}