"use strict";
exports.__esModule = true;
exports.FoodManagement = void 0;
var FoodManagement = /** @class */ (function () {
    function FoodManagement() {
        this.foodsmenu = [];
    }
    FoodManagement.prototype.addFoodmenu = function (foodmenu) {
        this.foodsmenu.push(foodmenu);
    };
    FoodManagement.prototype.getfoodMenu = function () {
        return this.foodsmenu;
    };
    return FoodManagement;
}());
exports.FoodManagement = FoodManagement;
