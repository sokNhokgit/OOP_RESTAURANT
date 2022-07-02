"use strict";
exports.__esModule = true;
exports.Delivery = void 0;
var Delivery = /** @class */ (function () {
    function Delivery(deliverer, foodOrder, customer) {
        this.deliverer = deliverer;
        this.foodOrder = foodOrder;
        this.customer = customer;
    }
    Delivery.prototype.isEqualCustomer = function (other) {
        return this.customer.isEqual(other);
    };
    return Delivery;
}());
exports.Delivery = Delivery;
