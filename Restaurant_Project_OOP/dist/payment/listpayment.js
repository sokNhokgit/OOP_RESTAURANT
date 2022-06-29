"use strict";
exports.__esModule = true;
exports.Listpayment = void 0;
var Listpayment = /** @class */ (function () {
    function Listpayment() {
        this.pays = [];
    }
    Listpayment.prototype.addPay = function (pay) {
        this.pays.push(pay);
    };
    Listpayment.prototype.getPays = function () {
        return this.pays;
    };
    return Listpayment;
}());
exports.Listpayment = Listpayment;
