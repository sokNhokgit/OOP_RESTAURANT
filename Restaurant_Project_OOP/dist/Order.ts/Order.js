"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(id, foodorder, numberofdishes) {
        this.id = id;
        this.foodorder = foodorder;
        this.numberofdishes = numberofdishes;
    }
    Order.prototype.getfoodOrder = function () {
        return this.foodorder;
    };
    Order.prototype.getid = function () {
        return this.id;
    };
    Order.prototype.getFood = function () {
        return this.foodorder;
    };
    Order.prototype.getNumberofdishes = function () {
        return this.numberofdishes;
    };
    Order.prototype.equalOrder = function (order) {
        return this.id === order.getid() &&
            this.numberofdishes === order.numberofdishes &&
            this.foodorder.equalFood(order.getfoodOrder());
    };
    return Order;
}());
exports.Order = Order;
