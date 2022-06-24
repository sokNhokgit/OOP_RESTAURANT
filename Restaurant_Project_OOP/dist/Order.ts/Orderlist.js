"use strict";
exports.__esModule = true;
exports.Orderlist = void 0;
var Orderlist = /** @class */ (function () {
    function Orderlist(tableid) {
        this.tableid = tableid;
        this.orderlist = [];
    }
    Orderlist.prototype.getOrderlist = function () {
        return this.orderlist;
    };
    Orderlist.prototype.addOrder = function (order) {
        this.orderlist.push(order);
    };
    return Orderlist;
}());
exports.Orderlist = Orderlist;
