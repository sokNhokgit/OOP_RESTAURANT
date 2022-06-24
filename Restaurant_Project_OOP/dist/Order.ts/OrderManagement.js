"use strict";
exports.__esModule = true;
exports.OrderManagement = void 0;
var OrderManagement = /** @class */ (function () {
    function OrderManagement() {
        this.ordermanagements = [];
    }
    OrderManagement.prototype.getOrdermanagement = function () {
        return this.ordermanagements;
    };
    OrderManagement.prototype.addOrderlist = function (orderlist) {
        this.ordermanagements.push(orderlist);
    };
    return OrderManagement;
}());
exports.OrderManagement = OrderManagement;
