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
exports.Outsideorder = void 0;
var Order_1 = require("./Order");
var Outsideorder = /** @class */ (function (_super) {
    __extends(Outsideorder, _super);
    function Outsideorder(id, category, date, customer) {
        var _this = _super.call(this, id, category) || this;
        _this.date = date;
        _this.customer = customer;
        _this.foodorder = [];
        return _this;
    }
    Outsideorder.prototype.addFood = function (food) {
        this.foodorder.push(food);
    };
    Outsideorder.prototype.gedFoods = function () {
        return this.foodorder;
    };
    Outsideorder.prototype.orderTotalPrice = function () {
        var totalprice = 0;
        var foods = this.foodorder;
        for (var i = 0; i < foods.length; i++) {
            totalprice += foods[i].getPrice();
        }
        return totalprice;
    };
    return Outsideorder;
}(Order_1.Order));
exports.Outsideorder = Outsideorder;
