"use strict";
exports.__esModule = true;
exports.Restraurant = void 0;
var TableManagement_1 = require("./table/TableManagement");
var PersonManagement_1 = require("./person/PersonManagement");
var kitchenManagement_1 = require("./kitchen/kitchenManagement");
var OrderManagement_1 = require("./Order.ts/OrderManagement");
var Restraurant = /** @class */ (function () {
    function Restraurant(name, location) {
        this.name = name;
        this.location = location;
        this.tablemanagement = new TableManagement_1.TableManagement();
        this.personmanagement = new PersonManagement_1.PersonManagement();
        this.kitchenmanagement = new kitchenManagement_1.KitchenManagement();
        this.ordersmanagement = new OrderManagement_1.OrderManagement();
    }
    return Restraurant;
}());
exports.Restraurant = Restraurant;
