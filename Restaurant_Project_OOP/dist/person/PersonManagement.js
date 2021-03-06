"use strict";
exports.__esModule = true;
exports.PersonManagement = void 0;
var PersonManagement = /** @class */ (function () {
    function PersonManagement() {
        this.staffs = [];
        this.insideCustomers = [];
        this.outsideCustomer = [];
        this.deliverers = [];
    }
    // staff only=======================================
    PersonManagement.prototype.addStaff = function (staff) {
        this.staffs.push(staff);
    };
    PersonManagement.prototype.getAllStaff = function () {
        return this.staffs;
    };
    PersonManagement.prototype.getsaff = function (staff) {
        var customers = [];
        var AllCutomers = this.getAllStaff();
        AllCutomers.forEach(function (customer) {
            if (customer.isEqual(staff)) {
                customers.push(customer);
            }
        });
        return customers;
    };
    // customer only ========================================
    PersonManagement.prototype.addInsideCustomer = function (customer) {
        this.insideCustomers.push(customer);
    };
    PersonManagement.prototype.getAllInsideCustomer = function () {
        return this.insideCustomers;
    };
    PersonManagement.prototype.addOutsideCustomer = function (customer) {
        this.outsideCustomer.push(customer);
    };
    PersonManagement.prototype.getAllOutsideCustomer = function () {
        return this.outsideCustomer;
    };
    // deliverer only ======================================
    PersonManagement.prototype.addDeliverer = function (deliverer) {
        this.deliverers.push(deliverer);
    };
    PersonManagement.prototype.getAllDeliverer = function () {
        return this.deliverers;
    };
    return PersonManagement;
}());
exports.PersonManagement = PersonManagement;
