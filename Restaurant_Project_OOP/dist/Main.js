"use strict";
exports.__esModule = true;
var Booking_1 = require("./Booking/Booking");
var Datetime_1 = require("./date/Datetime");
var Food_1 = require("./kitchen/Food");
var FoodCategory_1 = require("./kitchen/FoodCategory");
var FoodMenu_1 = require("./kitchen/FoodMenu");
var Location_1 = require("./Location");
var Customer_1 = require("./person/customer/Customer");
var Deliverer_1 = require("./person/deliverer/Deliverer");
var Gender_1 = require("./person/Gender");
var Chef_1 = require("./person/staff/Chef");
var Cleaner_1 = require("./person/staff/Cleaner");
var Security_1 = require("./person/staff/Security");
var Waiter_1 = require("./person/staff/Waiter");
var Restaurant_1 = require("./Restaurant");
var Table_1 = require("./table/Table");
var Tablestatus_1 = require("./table/Tablestatus");
/**
 * create location
*/
var location1 = new Location_1.Location('Norodom', 'Phnom Penh');
var location2 = new Location_1.Location('2004', 'Phnom Penh');
var location3 = new Location_1.Location('5', 'Banteay Mean Chey');
var location4 = new Location_1.Location('6', 'Batt Dombang');
var location5 = new Location_1.Location('251', 'Siem Reap');
/**
 * create restaurant
 */
var KakoRestaurant = new Restaurant_1.Restaurant('KakoRestaurant', location1);
// create staff =================================================
/**
 * create chef
 */
var chefBora = new Chef_1.Chef('Bora', 32, Gender_1.Gender.MALE, 123456789);
var chefPhanna = new Chef_1.Chef('Phanna', 26, Gender_1.Gender.MALE, 987654321);
var chefNorea = new Chef_1.Chef('Norea', 22, Gender_1.Gender.FEMALE, 999995555);
KakoRestaurant.personmanagement.addStaff(chefBora);
KakoRestaurant.personmanagement.addStaff(chefPhanna);
KakoRestaurant.personmanagement.addStaff(chefNorea);
/**
 * create waiter
 */
var waiterReaksmey = new Waiter_1.Waiter('Reaksmey', 19, Gender_1.Gender.FEMALE, 111111111);
var waiterNita = new Waiter_1.Waiter('Reaksmey', 23, Gender_1.Gender.FEMALE, 222222222);
var waiterOusa = new Waiter_1.Waiter('Reaksmey', 21, Gender_1.Gender.MALE, 333333333);
KakoRestaurant.personmanagement.addStaff(waiterReaksmey);
KakoRestaurant.personmanagement.addStaff(waiterNita);
KakoRestaurant.personmanagement.addStaff(waiterOusa);
/**
 * create security
 */
var securitySothea = new Security_1.Security('Sothea', 32, Gender_1.Gender.MALE, 4444444444);
KakoRestaurant.personmanagement.addStaff(securitySothea);
/**
 * create cleaner
 */
var cleanerTar = new Cleaner_1.Cleaner('Tar', 52, Gender_1.Gender.FEMALE, 55555555555);
var cleanerNea = new Cleaner_1.Cleaner('Nea', 42, Gender_1.Gender.FEMALE, 6666666666);
var cleanerJa = new Cleaner_1.Cleaner('Ja', 42, Gender_1.Gender.FEMALE, 7777777777);
KakoRestaurant.personmanagement.addStaff(cleanerJa);
KakoRestaurant.personmanagement.addStaff(cleanerNea);
KakoRestaurant.personmanagement.addStaff(cleanerTar);
// create customer ====================================================================
/**
 * create inside customer
 */
var insideCustomer1 = new Customer_1.InsideCustomer(1);
var insideCustomer2 = new Customer_1.InsideCustomer(2);
var insideCustomer3 = new Customer_1.InsideCustomer(3);
var insideCustomer4 = new Customer_1.InsideCustomer(4);
KakoRestaurant.personmanagement.addInsideCustomer(insideCustomer1);
KakoRestaurant.personmanagement.addInsideCustomer(insideCustomer2);
KakoRestaurant.personmanagement.addInsideCustomer(insideCustomer3);
KakoRestaurant.personmanagement.addInsideCustomer(insideCustomer4);
/**
 * create outside customer
 */
var outsideCustomer1 = new Customer_1.OutsideCustomer('Yo', 25, Gender_1.Gender.MALE, 1212121212, location2);
var outsideCustomer2 = new Customer_1.OutsideCustomer('Bo', 25, Gender_1.Gender.MALE, 123123123, location3);
var outsideCustomer3 = new Customer_1.OutsideCustomer('Na', 25, Gender_1.Gender.FEMALE, 123412341, location2);
var outsideCustomer4 = new Customer_1.OutsideCustomer('Ra', 25, Gender_1.Gender.FEMALE, 123451234, location3);
KakoRestaurant.personmanagement.addOutsideCustomer(outsideCustomer1);
KakoRestaurant.personmanagement.addOutsideCustomer(outsideCustomer2);
KakoRestaurant.personmanagement.addOutsideCustomer(outsideCustomer3);
KakoRestaurant.personmanagement.addOutsideCustomer(outsideCustomer4);
// create delivery =====================================================================
/**
 * create delivery
 */
var deliverer1 = new Deliverer_1.Deliverer('Mora', 28, Gender_1.Gender.MALE, 98123456789, Deliverer_1.Vehicle.MOTORCYCLE);
var deliverer2 = new Deliverer_1.Deliverer('Nata', 28, Gender_1.Gender.MALE, 98123456789, Deliverer_1.Vehicle.MOTORCYCLE);
var deliverer3 = new Deliverer_1.Deliverer('Mike', 28, Gender_1.Gender.MALE, 98123456789, Deliverer_1.Vehicle.MOTORCYCLE);
var deliverer4 = new Deliverer_1.Deliverer('Mark', 28, Gender_1.Gender.MALE, 98123456789, Deliverer_1.Vehicle.MOTORCYCLE);
KakoRestaurant.personmanagement.addDeliverer(deliverer1);
KakoRestaurant.personmanagement.addDeliverer(deliverer2);
KakoRestaurant.personmanagement.addDeliverer(deliverer3);
KakoRestaurant.personmanagement.addDeliverer(deliverer4);
// create table ========================================================================
/**
 * create table
 */
var table1 = new Table_1.Table(1, 4, Tablestatus_1.Tablestatus.NEW);
var table2 = new Table_1.Table(2, 8, Tablestatus_1.Tablestatus.NEW);
var table3 = new Table_1.Table(3, 5, Tablestatus_1.Tablestatus.NEW);
var table4 = new Table_1.Table(4, 4, Tablestatus_1.Tablestatus.NEW);
var table5 = new Table_1.Table(5, 6, Tablestatus_1.Tablestatus.NEW);
var table6 = new Table_1.Table(6, 8, Tablestatus_1.Tablestatus.NEW);
var table7 = new Table_1.Table(7, 10, Tablestatus_1.Tablestatus.NEW);
var table8 = new Table_1.Table(8, 6, Tablestatus_1.Tablestatus.NEW);
var table9 = new Table_1.Table(9, 6, Tablestatus_1.Tablestatus.NEW);
KakoRestaurant.tablemanagement.addTable(table1);
KakoRestaurant.tablemanagement.addTable(table2);
KakoRestaurant.tablemanagement.addTable(table3);
KakoRestaurant.tablemanagement.addTable(table4);
KakoRestaurant.tablemanagement.addTable(table5);
KakoRestaurant.tablemanagement.addTable(table6);
KakoRestaurant.tablemanagement.addTable(table7);
KakoRestaurant.tablemanagement.addTable(table8);
KakoRestaurant.tablemanagement.addTable(table9);
// create food ========================================================================
/**
 * create food menu
 */
var desert = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.DESERT);
var drink = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.DRINK);
var fish = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.FISH);
var meat = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.MEAT);
var soup = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.SOUP);
var vegetable = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.VEGETABLE);
/**
 * create food
 */
var food1 = new Food_1.Food(1, 'desert', 2);
var food2 = new Food_1.Food(2, 'drink', 1);
var food3 = new Food_1.Food(1, 'fish', 8);
var food4 = new Food_1.Food(1, 'meat', 2);
var food5 = new Food_1.Food(1, 'soup', 2);
var food6 = new Food_1.Food(1, 'vegetable', 2);
desert.addFood(food1);
drink.addFood(food2);
fish.addFood(food3);
meat.addFood(food4);
soup.addFood(food5);
vegetable.addFood(food6);
KakoRestaurant.kitchenmanagement.addFoodmenu(desert);
KakoRestaurant.kitchenmanagement.addFoodmenu(drink);
KakoRestaurant.kitchenmanagement.addFoodmenu(fish);
KakoRestaurant.kitchenmanagement.addFoodmenu(meat);
KakoRestaurant.kitchenmanagement.addFoodmenu(soup);
KakoRestaurant.kitchenmanagement.addFoodmenu(vegetable);
// create date time ==================================================================
/**
 * create date time
 */
var date1 = new Datetime_1.Datetime(12, 5, 2022, 8);
var date2 = new Datetime_1.Datetime(13, 5, 2022, 5);
var date3 = new Datetime_1.Datetime(23, 5, 2022, 1);
var date4 = new Datetime_1.Datetime(24, 5, 2022, 5);
var date5 = new Datetime_1.Datetime(29, 5, 2022, 8);
var date6 = new Datetime_1.Datetime(31, 5, 2022, 4);
// booking table =====================================================================
/**
 * booking table
 */
var book1 = new Booking_1.Booking(1, 10, outsideCustomer1, date1, date2);
var book2 = new Booking_1.Booking(1, 2, outsideCustomer2, date3, date4);
var book3 = new Booking_1.Booking(1, 5, outsideCustomer3, date5, date6);
KakoRestaurant.bookingmanagement.addBooking(book1);
KakoRestaurant.bookingmanagement.addBooking(book2);
KakoRestaurant.bookingmanagement.addBooking(book3);
console.log('=============== get all staff ================');
console.log(KakoRestaurant.personmanagement.getAllStaff());
console.log('=============== get all customer ================');
console.log(KakoRestaurant.personmanagement.getAllOutsideCustomer());
console.log('=============== get all deliverer ================');
console.log(KakoRestaurant.personmanagement.getAllDeliverer());
console.log('=============== get all table ================');
console.log(KakoRestaurant.tablemanagement.getTable());
console.log('=============== get table by chair ================');
// console.log(KakoRestaurant.tablemanagement.getTableByChair(4));
console.log('=============== get a table ================');
// console.log(KakoRestaurant.tablemanagement.tablefree());
console.log('=============== get food menu ================');
console.log(KakoRestaurant.kitchenmanagement.getfoodMenu());
console.log('=============== get food menu by category ================');
console.log(KakoRestaurant.kitchenmanagement.getFoodmenuwithCategory(FoodCategory_1.FoodCategory.DESERT));
console.log('=============== get all booking ================');
console.log(KakoRestaurant.bookingmanagement.getAllBooking());
console.log('=============== get all booking ================');
console.log(KakoRestaurant.bookingmanagement.getAllBookingByCustomer(outsideCustomer1));
