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
        for (var i = 0; i < tables.length; i++) {
            if (tables[i].istableFree()) {
                return tables[i];
            }
        }
        return undefined;
    };
    return TableManagement;
}());
exports.TableManagement = TableManagement;
