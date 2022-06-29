"use strict";
exports.__esModule = true;
exports.Datetime = void 0;
var Datetime = /** @class */ (function () {
    function Datetime(day, month, year, time) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.time = time;
    }
    Datetime.prototype.isEqual = function (other) {
        return this.day == other.day && this.month == other.month && this.year == other.year && this.time == other.time;
    };
    return Datetime;
}());
exports.Datetime = Datetime;
