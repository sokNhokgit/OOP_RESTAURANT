"use strict";
exports.__esModule = true;
exports.OrderManagement = void 0;
var Ordercategory_1 = require("./Ordercategory");
var paymentManagement_1 = require("../payment/paymentManagement");
var OrderManagement = /** @class */ (function () {
    function OrderManagement() {
        this.orders = [];
    }
    OrderManagement.prototype.getOrder = function () {
        return this.orders;
    };
    OrderManagement.prototype.addOrder = function (order) {
        this.orders.push(order);
    };
    OrderManagement.prototype.getOnlyinsideOrder = function () {
        var orders = this.orders;
        var orderIN = [];
        for (var i = 0; i < orders.length; i++) {
            if (orders[i].getCategory() === Ordercategory_1.OrderCategory.INSIDE_ORDER) {
                orderIN.push(orders[i]);
            }
        }
        return orderIN;
    };
    OrderManagement.prototype.getWaiterresponselist = function (waiter) {
        var orderInlist = this.getOnlyinsideOrder();
        var orders = [];
        for (var i = 0; i < orderInlist.length; i++) {
            var order = orderInlist[i];
            if (order.getWaiter().isWaiter(waiter)) {
                orders.push(order);
            }
        }
        return orders;
    };
    OrderManagement.prototype.getWaiterresponse = function (waiter) {
        var allwaiterresponse = this.getWaiterresponselist(waiter);
        return allwaiterresponse.length;
    };
    OrderManagement.prototype.getOrderPaid = function () {
        var orders = this.orders;
        var paymentManagement = new paymentManagement_1.PaymentManagement();
        var paidOrder = paymentManagement.getPays();
        return paidOrder;
    };
    return OrderManagement;
}());
exports.OrderManagement = OrderManagement;
