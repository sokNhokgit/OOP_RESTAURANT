"use strict";
exports.__esModule = true;
exports.PaymentManagement = void 0;
var Orderoutside_1 = require("../Order.ts/Orderoutside");
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
<<<<<<< HEAD
    PaymentManagement.prototype.getDayRevenue = function (date) {
        var totalpayprice = 0;
        var pays = this.pays;
        for (var i = 0; i < pays.length; i++) {
            var pay = pays[i].getOrder() || Orderoutside_1.Outsideorder;
            if (pay.getDate().isEqual(date)) {
                totalpayprice += pay.orderTotalPrice();
            }
        }
        return totalpayprice;
    };
    PaymentManagement.prototype.getRevenue = function () {
        var totalpayprice = 0;
        var pays = this.pays;
        for (var i = 0; i < pays.length; i++) {
            var pay = pays[i].getOrder() || Orderoutside_1.Outsideorder;
            totalpayprice += pay.orderTotalPrice();
        }
        return totalpayprice;
    };
=======
>>>>>>> d6d32b0847596c63c673e63a71c92a2a3a70e78c
    return PaymentManagement;
}());
exports.PaymentManagement = PaymentManagement;
