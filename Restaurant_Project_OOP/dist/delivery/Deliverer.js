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
exports.Deliverer = exports.Vehicle = void 0;
var Person_1 = require("../person/Person");
var Vehicle;
(function (Vehicle) {
    Vehicle[Vehicle["CAR"] = 0] = "CAR";
    Vehicle[Vehicle["MOTORCYCLE"] = 1] = "MOTORCYCLE";
    Vehicle[Vehicle["BIKE"] = 2] = "BIKE";
    Vehicle[Vehicle["TOKTOK"] = 3] = "TOKTOK";
})(Vehicle = exports.Vehicle || (exports.Vehicle = {}));
var Deliverer = /** @class */ (function (_super) {
    __extends(Deliverer, _super);
    function Deliverer(name, age, gender, phoneNumber, vehicle) {
        var _this = _super.call(this, name, age, gender, phoneNumber) || this;
        _this.vehicle = vehicle;
        return _this;
    }
    Deliverer.prototype.isEqualVehicle = function (other) {
        return this.vehicle == other;
    };
    Deliverer.prototype.isEqualDeliverer = function (other) {
        return this.name == other.name && this.age == other.age && this.gender == other.gender && this.phoneNumber == other.phoneNumber;
    };
    return Deliverer;
}(Person_1.Person));
exports.Deliverer = Deliverer;
