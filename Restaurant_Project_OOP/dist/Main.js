"use strict";
exports.__esModule = true;
var Gender_1 = require("./person/Gender");
var PersonManagement_1 = require("./person/PersonManagement");
var Chef_1 = require("./person/staff/Chef");
var Cleaner_1 = require("./person/staff/Cleaner");
var Security_1 = require("./person/staff/Security");
var StaffCategories_1 = require("./person/staff/StaffCategories");
var Waiter_1 = require("./person/staff/Waiter");
var Food_1 = require("./kitchen/Food");
var kitchenManagement_1 = require("./kitchen/kitchenManagement");
var FoodCategory_1 = require("./kitchen/FoodCategory");
var FoodMenu_1 = require("./kitchen/FoodMenu");
var OrderManagement_1 = require("./Order.ts/OrderManagement");
var Orderoutside_1 = require("./Order.ts/Orderoutside");
var Orderinside_1 = require("./Order.ts/Orderinside");
var Customer_1 = require("./person/customer/Customer");
var Location_1 = require("./Location");
var Restraurant_1 = require("./Restraurant");
var Table_1 = require("./table/Table");
var Tablestatus_1 = require("./table/Tablestatus");
var TableManagement_1 = require("./table/TableManagement");
/**
 * create location
 */
var location1 = new Location_1.Location('Norodom', 'Phnom Peng');
var location2 = new Location_1.Location('Sisovat', 'Phnom Peng');
var location3 = new Location_1.Location('Mean Chey', 'Phnom Peng');
var location4 = new Location_1.Location('395', 'Siem Reap');
var location5 = new Location_1.Location('5', 'Banteay Mean Chey');
/**
 * create restraurant
 */
var restraurant = new Restraurant_1.Restraurant('restraurant', location1);
var KakoRestraurant = new Restraurant_1.Restraurant('Kako Restraurant', location4);
/**
 * create staff
 */
var apple = new Chef_1.Chef('Apple', 29, Gender_1.Gender.MALE, 987654321, StaffCategories_1.StaffCategory.CHIEF);
var banana = new Waiter_1.Waiter('Banana', 35, Gender_1.Gender.FEMALE, 123456789, StaffCategories_1.StaffCategory.WAITER);
var coconut = new Security_1.Security('Coconut', 32, Gender_1.Gender.MALE, 918273645, StaffCategories_1.StaffCategory.SECURITY);
var DragonFruit = new Cleaner_1.Cleaner('DragonFruit', 40, Gender_1.Gender.FEMALE, 123498765, StaffCategories_1.StaffCategory.CLEANER);
var koko = new Chef_1.Chef('koko', 32, Gender_1.Gender.MALE, 987654321, StaffCategories_1.StaffCategory.CHIEF);
var vela = new Cleaner_1.Cleaner('Vela', 43, Gender_1.Gender.FEMALE, 123456789, StaffCategories_1.StaffCategory.CLEANER);
var kim = new Security_1.Security('Kim', 28, Gender_1.Gender.MALE, 678954321, StaffCategories_1.StaffCategory.SECURITY);
var bobo = new Waiter_1.Waiter('Bobo', 25, Gender_1.Gender.FEMALE, 214365879, StaffCategories_1.StaffCategory.WAITER);
/**
 * add staff to staff list
 */
var personManagement = new PersonManagement_1.PersonManagement();
personManagement.addStaff(apple);
personManagement.addStaff(banana);
personManagement.addStaff(coconut);
personManagement.addStaff(DragonFruit);
/**
 * create outside customer
 */
var romdual = new Customer_1.OutsideCustomer('Romdual', 25, Gender_1.Gender.FEMALE, 929394959, location1);
var shika = new Customer_1.OutsideCustomer('Shika', 30, Gender_1.Gender.FEMALE, 839248678, location2);
var nora = new Customer_1.OutsideCustomer('Nora', 40, Gender_1.Gender.MALE, 998943234, location3);
/**
 * create customer inside
 */
var nika = new Customer_1.InsideCustomer(1);
var chorkev = new Customer_1.InsideCustomer(2);
var lin = new Customer_1.InsideCustomer(3);
var seavheng = new Customer_1.InsideCustomer(4);
/**
 * add customer to the list
 */
personManagement.addOutsideCustomer(romdual);
personManagement.addOutsideCustomer(shika);
personManagement.addOutsideCustomer(nora);
personManagement.addInsideCustomer(nika);
personManagement.addInsideCustomer(chorkev);
personManagement.addInsideCustomer(lin);
personManagement.addInsideCustomer(seavheng);
/**
 * create food management
 */
var foodManagement = new kitchenManagement_1.KitchenManagement();
/**
 * create order management
 */
var orderManagement = new OrderManagement_1.OrderManagement();
// Menu foods
var soupMenu = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.SOUP);
var drinkMenu = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.DRINK);
var meatMenu = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.MEAT);
var desertMenu = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.DESERT);
/**
 * create food item
*/
var korko = new Food_1.Food(1, "Somlor kor ko", 5);
var greenTea = new Food_1.Food(2, "Green Tea", 1);
var loklak = new Food_1.Food(3, "loklak", 5);
var proher = new Food_1.Food(4, "proher", 5);
var cocacola = new Food_1.Food(5, "cocacola", 2);
var saray = new Food_1.Food(6, "saray", 1);
var bonamSiem = new Food_1.Food(7, "bongAmSiem", 1);
/**
 *create table  and table management
 */
var tablemanagement = new TableManagement_1.TableManagement();
var table1 = new Table_1.Table(1, 2, Tablestatus_1.Tablestatus.NEW);
var table2 = new Table_1.Table(2, 2, Tablestatus_1.Tablestatus.NEW);
var table3 = new Table_1.Table(3, 2, Tablestatus_1.Tablestatus.NEW);
var table4 = new Table_1.Table(4, 2, Tablestatus_1.Tablestatus.NEW);
/**
 * order inside
 */
var insideorder1 = new Orderinside_1.Insideorder(1, korko, 1, nika);
var insideorder2 = new Orderinside_1.Insideorder(2, greenTea, 1, chorkev);
var insideorder3 = new Orderinside_1.Insideorder(3, proher, 1, lin);
var insideorder4 = new Orderinside_1.Insideorder(4, loklak, 1, seavheng);
/**
 * add inside order to the table and add table into table management
 */
table1.setOrder(insideorder1);
table2.setOrder(insideorder2);
table3.setOrder(insideorder3);
table4.setOrder(insideorder4);
tablemanagement.addTable(table1);
tablemanagement.addTable(table2);
tablemanagement.addTable(table3);
tablemanagement.addTable(table4);
/***
 * order outside
 */
var outsideorder1 = new Orderoutside_1.Outsideorder(1, cocacola, 1, romdual);
var outsideorder2 = new Orderoutside_1.Outsideorder(2, korko, 2, shika);
var outsideorder3 = new Orderoutside_1.Outsideorder(3, loklak, 1, nora);
/**
 * create food menu by it category
 */
soupMenu.addFood(korko);
soupMenu.addFood(proher);
drinkMenu.addFood(greenTea);
drinkMenu.addFood(cocacola);
meatMenu.addFood(loklak);
desertMenu.addFood(saray);
desertMenu.addFood(bonamSiem);
/**
 * add food menu into food management
 */
foodManagement.addFoodmenu(soupMenu);
foodManagement.addFoodmenu(drinkMenu);
foodManagement.addFoodmenu(meatMenu);
foodManagement.addFoodmenu(desertMenu);
/**
 * add order list inside and outside into order management
 */
orderManagement.addOrderinside(insideorder1);
orderManagement.addOrderinside(insideorder2);
orderManagement.addOrderinside(insideorder3);
orderManagement.addOrderinside(insideorder4);
orderManagement.addOrderoutside(outsideorder1);
orderManagement.addOrderoutside(outsideorder2);
orderManagement.addOrderoutside(outsideorder3);
// console.log(foodManagement.getFoodmenuwithCategory(FoodCategory.DRINK));
// console.log(foodManagement.getfoodMenu());
// console.log(tablemanagement.tablefree());
// console.log(tablemanagement.getTable());
console.log(personManagement.getAllStaff());
// console.log(personManagement.getAllStaffBySalary(0));
// console.log(personManagement.getOnlyStaffCategory(StaffCategory.CHIEF));
console.log(personManagement.getAllInsideCustomer());
console.log(personManagement.getAllOutsideCustomer());
