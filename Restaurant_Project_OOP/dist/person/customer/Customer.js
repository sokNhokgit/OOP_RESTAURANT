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
exports.InsideCustomer = exports.OutsideCustomer = void 0;
var Person_1 = require("../Person");
var OutsideCustomer = /** @class */ (function (_super) {
    __extends(OutsideCustomer, _super);
    function OutsideCustomer(name, age, gender, phoneNumber, location) {
        var _this = _super.call(this, name, age, gender, phoneNumber) || this;
        _this.location = location;
        return _this;
    }
    OutsideCustomer.prototype.getCustomerLocation = function () {
        return this.location;
    };
    return OutsideCustomer;
}(Person_1.Person));
exports.OutsideCustomer = OutsideCustomer;
var InsideCustomer = /** @class */ (function () {
    function InsideCustomer(cusomerID) {
        this.cusomerID = cusomerID;
    }
    return InsideCustomer;
}());
exports.InsideCustomer = InsideCustomer;
