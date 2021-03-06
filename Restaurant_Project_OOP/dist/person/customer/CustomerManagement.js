"use strict";
exports.__esModule = true;
exports.CustomerManagement = void 0;
var CustomerManagement = /** @class */ (function () {
    function CustomerManagement() {
        this.insideCustomer = [];
        this.outsideCustomer = [];
    }
    CustomerManagement.prototype.getOutsideCustomer = function () {
        return this.outsideCustomer;
    };
    CustomerManagement.prototype.getInsideCustomer = function () {
        return this.insideCustomer;
    };
    CustomerManagement.prototype.addOutsideCustomer = function (customer) {
        this.outsideCustomer.push(customer);
    };
    CustomerManagement.prototype.addInsideCustomer = function (customer) {
        this.insideCustomer.push(customer);
    };
    return CustomerManagement;
}());
exports.CustomerManagement = CustomerManagement;
