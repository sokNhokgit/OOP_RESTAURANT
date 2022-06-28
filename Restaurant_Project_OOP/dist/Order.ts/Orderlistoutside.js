"use strict";
exports.__esModule = true;
exports.Orderlistoutside = void 0;
var Orderlistoutside = /** @class */ (function () {
    function Orderlistoutside() {
        this.orderlist = [];
    }
    Orderlistoutside.prototype.getOrderlist = function () {
        return this.orderlist;
    };
    Orderlistoutside.prototype.addOrder = function (order) {
        this.orderlist.push(order);
    };
    return Orderlistoutside;
}());
exports.Orderlistoutside = Orderlistoutside;
