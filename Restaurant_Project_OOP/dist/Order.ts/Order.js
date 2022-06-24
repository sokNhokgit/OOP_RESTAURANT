"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(id, customerid, foodorder, numberofdishes) {
        this.id = id;
        this.customerid = customerid;
        this.foodorder = foodorder;
        this.numberofdishes = numberofdishes;
    }
    return Order;
}());
exports.Order = Order;
