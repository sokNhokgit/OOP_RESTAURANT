"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(tableid, chairnumber, tablestatus) {
        this.tableid = tableid;
        this.chairnumber = chairnumber;
        this.tablestatus = tablestatus;
        this.ordered = undefined;
    }
    Table.prototype.setOrder = function (order) {
        this.ordered = order;
    };
    Table.prototype.isChairEqual = function (other) {
        return this.chairnumber == other;
    };
    Table.prototype.istableFree = function () {
        var isfree = true;
        if (this.ordered !== undefined) {
            isfree = false;
        }
        return isfree;
    };
    Table.prototype.isIdEqual = function (other) {
        return this.tableid == other;
    };
    Table.prototype.customerLeft = function () {
        this.ordered = undefined;
        return "table id number " + this.tableid + " is free now";
    };
    return Table;
}());
exports.Table = Table;
