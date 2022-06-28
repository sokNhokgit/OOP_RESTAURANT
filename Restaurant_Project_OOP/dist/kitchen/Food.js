"use strict";
exports.__esModule = true;
exports.Food = void 0;
var Food = /** @class */ (function () {
    function Food(foodid, name, price) {
        this.foodid = foodid;
        this.name = name;
        this.price = price;
    }
    Food.prototype.getid = function () {
        return this.foodid;
    };
    Food.prototype.getName = function () {
        return this.name;
    };
    Food.prototype.getPrice = function () {
        return this.price;
    };
    Food.prototype.equalFood = function (food) {
        return this.foodid === food.getid() && this.name === food.getName() && this.price === food.getPrice();
    };
    return Food;
}());
exports.Food = Food;
