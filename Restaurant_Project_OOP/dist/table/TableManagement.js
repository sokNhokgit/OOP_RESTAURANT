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
    return TableManagement;
}());
exports.TableManagement = TableManagement;
