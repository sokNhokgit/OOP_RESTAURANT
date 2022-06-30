"use strict";
exports.__esModule = true;
exports.PaymentManagement = void 0;
var PaymentManagement = /** @class */ (function () {
    function PaymentManagement() {
        this.pays = [];
    }
    PaymentManagement.prototype.addPay = function (pay) {
        this.pays.push(pay);
    };
    PaymentManagement.prototype.getPays = function () {
        return this.pays;
    };
    PaymentManagement.prototype.isOrdergetPaid = function (order) {
        var orderisPaid = false;
        var pays = this.pays;
        for (var i = 0; i < pays.length; i++) {
            if (pays[i].getOrder().isEqual(order)) {
                orderisPaid = true;
            }
        }
        return orderisPaid;
    };
    return PaymentManagement;
}());
exports.PaymentManagement = PaymentManagement;
