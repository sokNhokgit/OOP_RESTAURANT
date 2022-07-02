"use strict";
exports.__esModule = true;
exports.BookingManagement = void 0;
var BookingManagement = /** @class */ (function () {
    function BookingManagement() {
        this.bookingList = [];
        this.listOfBookingConcel = [];
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
    BookingManagement.prototype.restartdata = function () {
        this.bookingList = [];
        this.listOfBookingConcel = [];
    };
    BookingManagement.prototype.countAllBooking = function () {
        return this.bookingList.length;
    };
    BookingManagement.prototype.addBooking = function (booking) {
        this.bookingList.push(booking);
    };
    BookingManagement.prototype.getAllBooking = function () {
        return this.bookingList;
    };
    BookingManagement.prototype.getOneBookingByCustomer = function (customer) {
        for (var _i = 0, _a = this.bookingList; _i < _a.length; _i++) {
            var booking = _a[_i];
            if (booking['customer'].isEqual(customer)) {
                return booking;
            }
        }
        return undefined;
    };
    BookingManagement.prototype.getAllBookingByCustomer = function (customer) {
        var listOfBooking = [];
        for (var _i = 0, _a = this.bookingList; _i < _a.length; _i++) {
            var booking = _a[_i];
            if (booking['customer'].isEqual(customer)) {
                listOfBooking.push(booking);
            }
        }
        if (this.bookingList.length > 0) {
            return listOfBooking;
        }
        else {
            return undefined;
        }
    };
    BookingManagement.prototype.concellBooking = function (customer, dateBook) {
        for (var _i = 0, _a = this.bookingList; _i < _a.length; _i++) {
            var booking = _a[_i];
            if (booking['customer'].isEqual(customer) && booking['bookDate'].isEqual(dateBook)) {
                this.addBookingConcel(booking);
            }
        }
    };
    BookingManagement.prototype.addBookingConcel = function (bookingConcell) {
        this.listOfBookingConcel.push(bookingConcell);
    };
    BookingManagement.prototype.getAllBookingConcel = function () {
        return this.listOfBookingConcel;
    };
    BookingManagement.prototype.getAllBookingConcellByCustomer = function (customer) {
        var listOfBookingConcel = [];
        for (var _i = 0, _a = this.bookingList; _i < _a.length; _i++) {
            var booking = _a[_i];
            if (booking['customer'].isEqual(customer)) {
                listOfBookingConcel.push(booking);
            }
        }
        if (this.bookingList.length > 0) {
            return listOfBookingConcel;
        }
        else {
            return undefined;
        }
    };
    return BookingManagement;
}());
exports.BookingManagement = BookingManagement;
