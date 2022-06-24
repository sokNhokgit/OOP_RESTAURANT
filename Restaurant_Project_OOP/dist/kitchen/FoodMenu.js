"use strict";
exports.__esModule = true;
exports.FoodMenu = void 0;
var FoodMenu = /** @class */ (function () {
    function FoodMenu(category) {
        this.category = category;
        this.foods = [];
    }
    FoodMenu.prototype.setFoodmenuCategory = function (category) {
        this.category = category;
    };
    FoodMenu.prototype.getFoodmenuCategory = function () {
        return this.category;
    };
    FoodMenu.prototype.addFood = function (food) {
        this.foods.push(food);
    };
    FoodMenu.prototype.getFood = function () {
        return this.foods;
    };
    return FoodMenu;
}());
exports.FoodMenu = FoodMenu;
