"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(id, category, date) {
        this.id = id;
        this.category = category;
        this.date = date;
    }
    Order.prototype.getCategory = function () {
        return this.category;
    };
    Order.prototype.getId = function () {
        return this.id;
    };
    Order.prototype.isEqual = function (order) {
        return this.id === order.id && this.category === order.category;
    };
    Order.prototype.getDate = function () {
        return this.date;
    };
    return Order;
}());
exports.Order = Order;
