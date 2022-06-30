"use strict";
exports.__esModule = true;
exports.DeliveryManagement = void 0;
var DeliveryManagement = /** @class */ (function () {
    function DeliveryManagement() {
        this.deliveryList = [];
    }
    DeliveryManagement.prototype.addDelivery = function (delivery) {
        this.deliveryList.push(delivery);
    };
    DeliveryManagement.prototype.getAllDelivery = function () {
        return this.deliveryList;
    };
    DeliveryManagement.prototype.getAllDeliveryByDeliverer = function (deliverer) {
        var deliveries = [];
        for (var _i = 0, _a = this.deliveryList; _i < _a.length; _i++) {
            var delivery = _a[_i];
            if (delivery['deliverer'].isEqualDeliverer(deliverer)) {
                deliveries.push(delivery);
            }
        }
        if (deliveries.length > 0) {
            return deliveries;
        }
        else {
            return undefined;
        }
    };
    DeliveryManagement.prototype.getAllDeliveryByCustomer = function (customer) {
        var deliveries = [];
        for (var _i = 0, _a = this.deliveryList; _i < _a.length; _i++) {
            var delivery = _a[_i];
            if (delivery['customer'].isEqual(customer)) {
                deliveries.push(delivery);
            }
        }
        if (deliveries.length > 0) {
            return deliveries;
        }
        else {
            return undefined;
        }
    };
    return DeliveryManagement;
}());
exports.DeliveryManagement = DeliveryManagement;
