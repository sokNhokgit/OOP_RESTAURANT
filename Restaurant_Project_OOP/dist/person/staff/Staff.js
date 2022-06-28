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
exports.Staff = void 0;
var Person_1 = require("../Person");
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(staffCategory, name, age, gender, phoneNumber) {
        var _this = _super.call(this, name, age, gender, phoneNumber) || this;
        _this.staffCategory = staffCategory;
        _this.salary = 0;
        return _this;
    }
    Staff.prototype.isEqual = function (other) {
        return this.staffCategory == other;
    };
    Staff.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Staff.prototype.getSalary = function () {
        return this.salary;
    };
    return Staff;
}(Person_1.Person));
exports.Staff = Staff;
