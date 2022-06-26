"use strict";
exports.__esModule = true;
exports.PersonManagement = void 0;
var PersonManagement = /** @class */ (function () {
    function PersonManagement() {
        this.staffs = [];
        this.insideCustomers = [];
        this.outsideCustomer = [];
    }
    PersonManagement.prototype.addStaff = function (staff) {
        this.staffs.push(staff);
    };
    PersonManagement.prototype.getAllStaff = function () {
        return this.staffs;
    };
    PersonManagement.prototype.getOnlyStaffCategory = function (staffCategory) {
        var customers = [];
        var AllCutomers = this.getAllStaff();
        AllCutomers.forEach(function (customer) {
            if (customer.isEqual(staffCategory)) {
                customers.push(customer);
            }
        });
        return customers;
    };
    return PersonManagement;
}());
exports.PersonManagement = PersonManagement;
