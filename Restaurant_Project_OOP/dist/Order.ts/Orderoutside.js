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
    function Outsideorder(id, foodorder, numberofdishes, customer) {
        return _super.call(this, id, foodorder, numberofdishes) || this;
    }
    return Outsideorder;
}(Order_1.Order));
exports.Outsideorder = Outsideorder;
