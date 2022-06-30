"use strict";
exports.__esModule = true;
exports.Delivery = void 0;
var Delivery = /** @class */ (function () {
    function Delivery(deliverer, food, customer) {
        this.deliverer = deliverer;
        this.food = food;
        this.customer = customer;
    }
    Delivery.prototype.isEqualCustomer = function (other) {
        return this.customer.isEqual(other);
    };
    return Delivery;
}());
exports.Delivery = Delivery;
