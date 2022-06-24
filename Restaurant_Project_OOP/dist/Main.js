"use strict";
exports.__esModule = true;
var Food_1 = require("./kitchen/Food");
var FoodManagement_1 = require("./kitchen/FoodManagement");
var FoodCategory_1 = require("./kitchen/FoodCategory");
var FoodMenu_1 = require("./kitchen/FoodMenu");
var OrderManagement_1 = require("./Order.ts/OrderManagement");
var Orderlist_1 = require("./Order.ts/Orderlist");
var Order_1 = require("./Order.ts/Order");
// management 
var foodManagement = new FoodManagement_1.FoodManagement();
var orderManagement = new OrderManagement_1.OrderManagement();
// Menu foods
var foodMenu1 = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.SOUP);
var foodMenu2 = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.DRINK);
var foodMenu3 = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.MEAT);
var foodMenu4 = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.DESERT);
//orderlist
var orderlisttable1 = new Orderlist_1.Orderlist(1);
var orderlisttable2 = new Orderlist_1.Orderlist(2);
var orderlisttable3 = new Orderlist_1.Orderlist(3);
var orderlisttable4 = new Orderlist_1.Orderlist(4);
// foods Items
var korko = new Food_1.Food(1, "Somlor kor ko", 5, FoodCategory_1.FoodCategory.SOUP);
var greenTea = new Food_1.Food(2, "Green Tea", 1, FoodCategory_1.FoodCategory.DRINK);
var loklak = new Food_1.Food(3, "loklak", 5, FoodCategory_1.FoodCategory.MEAT);
var proher = new Food_1.Food(4, "proher", 5, FoodCategory_1.FoodCategory.SOUP);
var cocacola = new Food_1.Food(5, "cocacola", 2, FoodCategory_1.FoodCategory.DRINK);
var saray = new Food_1.Food(6, "saray", 1, FoodCategory_1.FoodCategory.DESERT);
var bonamSiem = new Food_1.Food(7, "bongAmSiem", 1, FoodCategory_1.FoodCategory.DESERT);
// order
var customer1order = new Order_1.Order(1, 1, korko, 1);
var customer2order = new Order_1.Order(2, 2, greenTea, 1);
var customer3order = new Order_1.Order(3, 3, proher, 1);
var customer4order = new Order_1.Order(4, 4, loklak, 1);
// add items place
foodMenu1.addFood(korko);
foodMenu1.addFood(proher);
foodMenu2.addFood(greenTea);
foodMenu2.addFood(cocacola);
foodMenu3.addFood(loklak);
foodMenu4.addFood(saray);
foodMenu4.addFood(bonamSiem);
orderlisttable1.addOrder(customer1order);
orderlisttable2.addOrder(customer2order);
orderlisttable3.addOrder(customer3order);
orderlisttable4.addOrder(customer4order);
// managemnt add place
foodManagement.addFoodmenu(foodMenu1);
foodManagement.addFoodmenu(foodMenu2);
foodManagement.addFoodmenu(foodMenu3);
foodManagement.addFoodmenu(foodMenu4);
orderManagement.addOrderlist(orderlisttable1);
orderManagement.addOrderlist(orderlisttable2);
orderManagement.addOrderlist(orderlisttable3);
orderManagement.addOrderlist(orderlisttable4);
console.log(orderlisttable2.getOrderlist());
