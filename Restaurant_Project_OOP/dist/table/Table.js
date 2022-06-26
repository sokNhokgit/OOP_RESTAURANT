"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(tableid, tablestatus) {
        this.tableid = tableid;
        this.tablestatus = tablestatus;
        this.chairs = [];
    }
    Table.prototype.addChair = function (chair) {
        this.chairs.push(chair);
    };
    Table.prototype.getChair = function () {
        return this.chairs;
    };
    Table.prototype.istablefree = function () {
        var chairs = this.chairs;
        var chairfree = true;
        if (chairs.length > 0) {
            chairfree = false;
        }
        return chairfree;
    };
    return Table;
}());
exports.Table = Table;
