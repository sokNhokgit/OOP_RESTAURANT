"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Insideorder = void 0;
var Order_1 = require("./Order");
var Insideorder = /** @class */ (function (_super) {
    __extends(Insideorder, _super);
    function Insideorder(id, category, date, waiter, customer) {
        var _this = _super.call(this, id, category, date) || this;
        _this.waiter = waiter;
        _this.customer = customer;
        _this.foododer = [];
        return _this;
    }
    Insideorder.prototype.getWaiter = function () {
        return this.waiter;
    };
    Insideorder.prototype.addFood = function (food) {
        this.foododer.push(food);
    };
    Insideorder.prototype.gedFoods = function () {
        return this.foododer;
    };
    Insideorder.prototype.orderTotalPrice = function () {
        var totalprice = 0;
        var foods = this.foododer;
        for (var i = 0; i < foods.length; i++) {
            totalprice += foods[i].getPrice();
        }
        return totalprice;
    };
    return Insideorder;
}(Order_1.Order));
exports.Insideorder = Insideorder;
