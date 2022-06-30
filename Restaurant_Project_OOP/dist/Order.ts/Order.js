"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(id, category) {
        this.id = id;
        this.category = category;
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
    return Order;
}());
exports.Order = Order;
