"use strict";
exports.__esModule = true;
exports.BookingManagement = void 0;
var BookingManagement = /** @class */ (function () {
    function BookingManagement() {
        this.bookingList = [];
    }
    BookingManagement.prototype.addBooking = function (booking) {
        this.bookingList.push(booking);
    };
    BookingManagement.prototype.getAllBooking = function () {
        return this.bookingList;
    };
    BookingManagement.prototype.getBookingByCustomer = function (customer) {
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
    BookingManagement.prototype.concellOneBooking = function (customer, dateBook) {
        var listOfBooking = [];
        for (var i = 0; i < this.bookingList.length; i++) {
            if (this.bookingList[i]['customer'].isEqual(customer) && this.bookingList[i]['bookDate'].isEqual(dateBook)) {
                listOfBooking.push(i);
            }
        }
        if (listOfBooking.length > 0) {
            this.bookingList.splice(listOfBooking[0], 1);
        }
        else {
            return undefined;
        }
    };
    BookingManagement.prototype.concellAllBooking = function (customer) {
        var listOfBooking = [];
        for (var i = 0; i < this.bookingList.length; i++) {
            if (this.bookingList[i]['customer'].isEqual(customer)) {
                listOfBooking.push(i);
            }
        }
        if (listOfBooking.length > 0) {
            for (var _i = 0, listOfBooking_1 = listOfBooking; _i < listOfBooking_1.length; _i++) {
                var booking = listOfBooking_1[_i];
                this.bookingList.splice(booking, 1);
            }
        }
    };
    return BookingManagement;
}());
exports.BookingManagement = BookingManagement;
