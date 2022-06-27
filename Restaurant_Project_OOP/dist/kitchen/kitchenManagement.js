"use strict";
exports.__esModule = true;
exports.KitchenManagement = void 0;
var KitchenManagement = /** @class */ (function () {
    function KitchenManagement() {
        this.foodsmenu = [];
    }
    KitchenManagement.prototype.addFoodmenu = function (foodmenu) {
        this.foodsmenu.push(foodmenu);
    };
    KitchenManagement.prototype.getfoodMenu = function () {
        return this.foodsmenu;
    };
    KitchenManagement.prototype.getFoodmenuwithCategory = function (foodcategory) {
        var foodsmenu = this.foodsmenu;
        for (var i = 0; i < foodsmenu.length; i++) {
            if (foodsmenu[i].foodMenuisEqual(foodcategory)) {
                return foodsmenu[i];
            }
        }
        return undefined;
    };
    return KitchenManagement;
}());
exports.KitchenManagement = KitchenManagement;
