"use strict";
exports.__esModule = true;
exports.OrderManagement = void 0;
var OrderManagement = /** @class */ (function () {
    function OrderManagement() {
        this.listinside = [];
        this.listoutside = [];
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
    OrderManagement.prototype.getWaiterresponselist = function (waiter) {
        var orderInlist = this.listinside;
        var orders = [];
        for (var i = 0; i < orderInlist.length; i++) {
            if (orderInlist[i].getWaiter().isWaiter(waiter)) {
                orders.push(orderInlist[i]);
            }
        }
        return orders;
    };
    OrderManagement.prototype.getWaiterresponse = function (waiter) {
        var allwaiterresponse = this.getWaiterresponselist(waiter);
        return allwaiterresponse.length;
    };
    return OrderManagement;
}());
exports.OrderManagement = OrderManagement;
