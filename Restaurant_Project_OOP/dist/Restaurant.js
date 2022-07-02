"use strict";
exports.__esModule = true;
exports.Restaurant = void 0;
var TableManagement_1 = require("./table/TableManagement");
var PersonManagement_1 = require("./person/PersonManagement");
var kitchenManagement_1 = require("./kitchen/kitchenManagement");
var OrderManagement_1 = require("./Order.ts/OrderManagement");
var BookingManagement_1 = require("./Booking/BookingManagement");
var paymentManagement_1 = require("./payment/paymentManagement");
var DeliveryManagement_1 = require("./delivery/DeliveryManagement");
var Restaurant = /** @class */ (function () {
    function Restaurant(name, location) {
        this.name = name;
        this.location = location;
        this.tablemanagement = new TableManagement_1.TableManagement();
        this.personmanagement = new PersonManagement_1.PersonManagement();
        this.kitchenmanagement = new kitchenManagement_1.KitchenManagement();
        this.ordersmanagement = new OrderManagement_1.OrderManagement();
        this.bookingmanagement = new BookingManagement_1.BookingManagement();
        this.paymentManagement = new paymentManagement_1.PaymentManagement();
        this.bookmanagement = new BookingManagement_1.BookingManagement();
        this.deliverymanagement = new DeliveryManagement_1.DeliveryManagement();
    }
    return Restaurant;
}());
exports.Restaurant = Restaurant;
