"use strict";
exports.__esModule = true;
exports.OrderManagement = void 0;
var OrderManagement = /** @class */ (function () {
    function OrderManagement() {
        this.listinside = [];
        this.listoutside = [];
        // getOrderByCustomer(customer:OutsideCustomer)
    }
    OrderManagement.prototype.getOrderinside = function () {
        return this.listinside;
    };
    OrderManagement.prototype.addOrderinside = function (order) {
        this.listinside.push(order);
    };
    OrderManagement.prototype.getOrderoutside = function () {
        return this.listoutside;
    };
    OrderManagement.prototype.addOrderoutside = function (order) {
        this.listoutside.push(order);
    };
    return OrderManagement;
}());
exports.OrderManagement = OrderManagement;
