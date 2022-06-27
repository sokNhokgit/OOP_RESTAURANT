"use strict";
exports.__esModule = true;
exports.Orderlistinside = void 0;
var Orderlistinside = /** @class */ (function () {
    function Orderlistinside() {
        this.orderlist = [];
    }
    Orderlistinside.prototype.getOrderlist = function () {
        return this.orderlist;
    };
    Orderlistinside.prototype.addOrder = function (order) {
        this.orderlist.push(order);
    };
    return Orderlistinside;
}());
exports.Orderlistinside = Orderlistinside;
