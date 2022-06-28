"use strict";
exports.__esModule = true;
exports.Pay = void 0;
var Pay = /** @class */ (function () {
    function Pay(amount, ordered) {
        this.amount = amount;
        this.ordered = ordered;
    }
    Pay.prototype.getOrder = function () {
        return this.ordered;
    };
    return Pay;
}());
exports.Pay = Pay;
