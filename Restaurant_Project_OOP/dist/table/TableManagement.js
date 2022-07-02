"use strict";
exports.__esModule = true;
exports.TableManagement = void 0;
var TableManagement = /** @class */ (function () {
    function TableManagement() {
        this.tables = [];
    }
    TableManagement.prototype.getTable = function () {
        return this.tables;
    };
    TableManagement.prototype.countAllTable = function () {
        return this.tables.length;
    };
    TableManagement.prototype.addTable = function (table) {
        this.tables.push(table);
    };
    TableManagement.prototype.findfreeTable = function () {
        var tables = this.tables;
        var freetable = [];
        for (var i = 0; i < tables.length; i++) {
            if (tables[i].istableFree()) {
                freetable.push(tables[i]);
            }
        }
        if (freetable.length !== 0) {
            return freetable;
        }
        return undefined;
    };
    TableManagement.prototype.findAllFreeTable = function () {
        var tables = this.tables;
        var tableFree = [];
        for (var i = 0; i < tables.length; i++) {
            if (tables[i].istableFree()) {
                tableFree.push(tables[i]);
            }
        }
        if (tableFree.length > 0) {
            return tableFree;
        }
        return undefined;
    };
    TableManagement.prototype.getAllTableByChair = function (chair) {
        var Tables = [];
        for (var _i = 0, _a = this.tables; _i < _a.length; _i++) {
            var table = _a[_i];
            if (table.isChairEqual(chair)) {
                Tables.push(table);
            }
        }
        if (Tables.length > 0) {
            return Tables;
        }
        else {
            return undefined;
        }
    };
    TableManagement.prototype.countAllTableByChair = function (chair) {
        var Tables = [];
        for (var _i = 0, _a = this.tables; _i < _a.length; _i++) {
            var table = _a[_i];
            if (table.isChairEqual(chair)) {
                Tables.push(table);
            }
        }
        if (Tables.length > 0) {
            return Tables.length;
        }
        else {
            return undefined;
        }
    };
    return TableManagement;
}());
exports.TableManagement = TableManagement;
