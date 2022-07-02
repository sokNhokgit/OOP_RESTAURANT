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
<<<<<<< HEAD
var TableManagement_1 = require("./table/TableManagement");
var Datetime_1 = require("./date/Datetime");
var paybybankaccount_1 = require("./payment/paybybankaccount");
var paydirectmoney_1 = require("./payment/paydirectmoney");
var paymentManagement_1 = require("./payment/paymentManagement");
var Booking_1 = require("./Booking/Booking");
var BookingManagement_1 = require("./Booking/BookingManagement");
var Ordercategory_1 = require("./Order.ts/Ordercategory");
var location1 = new Location_1.Location('Norodom', 'Phnom Peng');
var location2 = new Location_1.Location('Sisovat', 'Phnom Peng');
var location3 = new Location_1.Location('Mean Chey', 'Phnom Peng');
var location4 = new Location_1.Location('395', 'Siem Reap');
var location5 = new Location_1.Location('5', 'Banteay Mean Chey');
var KakoRestraurant = new Restraurant_1.Restraurant('Kako Restraurant', location4);
var apple = new Chef_1.Chef('Apple', 29, Gender_1.Gender.MALE, 977403175);
var banana = new Waiter_1.Waiter('Banana', 35, Gender_1.Gender.FEMALE, 977493175);
var waiter2 = new Waiter_1.Waiter('waiter2', 23, Gender_1.Gender.FEMALE, 977493175);
var coconut = new Security_1.Security('Coconut', 32, Gender_1.Gender.MALE, 977493175);
var DragonFruit = new Cleaner_1.Cleaner('DragonFruit', 40, Gender_1.Gender.FEMALE, 977493175);
var kitchenmanagement = new kitchenManagement_1.KitchenManagement();
var ordermanagement = new OrderManagement_1.OrderManagement();
var paymentmanagement = new paymentManagement_1.PaymentManagement();
var bookingManagement = new BookingManagement_1.BookingManagement();
var tablemanagement = new TableManagement_1.TableManagement();
var personManagement = new PersonManagement_1.PersonManagement();
var date1 = new Datetime_1.Datetime(11, 11, 2022, 1);
var date1Arried = new Datetime_1.Datetime(11, 11, 2022, 1.15);
var date2 = new Datetime_1.Datetime(12, 11, 2022, 2);
var date2Arried = new Datetime_1.Datetime(11, 11, 2022, 2.15);
var date3 = new Datetime_1.Datetime(13, 11, 2022, 3);
var date3Arried = new Datetime_1.Datetime(11, 11, 2022, 3.15);
var date4 = new Datetime_1.Datetime(14, 11, 2022, 4);
var date4Arried = new Datetime_1.Datetime(11, 11, 2022, 4.15);
var date5 = new Datetime_1.Datetime(15, 11, 2022, 5);
var date5Arried = new Datetime_1.Datetime(11, 11, 2022, 5.15);
var romdual = new Customer_1.OutsideCustomer('Romdual', 25, Gender_1.Gender.FEMALE, 929394959, location1);
var shika = new Customer_1.OutsideCustomer('Shika', 30, Gender_1.Gender.FEMALE, 839248678, location2);
var nora = new Customer_1.OutsideCustomer('Nora', 40, Gender_1.Gender.MALE, 998943234, location3);
var nika = new Customer_1.InsideCustomer(1);
var chorkev = new Customer_1.InsideCustomer(2);
var lin = new Customer_1.InsideCustomer(3);
var seavheng = new Customer_1.InsideCustomer(4);
var soupMenu = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.SOUP);
var drinkMenu = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.DRINK);
var meatMenu = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.MEAT);
var desertMenu = new FoodMenu_1.FoodMenu(FoodCategory_1.FoodCategory.DESERT);
var korko = new Food_1.Food(1, "Somlor kor ko", 5);
var greenTea = new Food_1.Food(2, "Green Tea", 1);
var loklak = new Food_1.Food(3, "loklak", 5);
var proher = new Food_1.Food(4, "proher", 5);
var cocacola = new Food_1.Food(5, "cocacola", 2);
var saray = new Food_1.Food(6, "saray", 1);
var bonamSiem = new Food_1.Food(7, "bongAmSiem", 1);
var table1 = new Table_1.Table(1, 2, Tablestatus_1.Tablestatus.NEW);
var table2 = new Table_1.Table(2, 2, Tablestatus_1.Tablestatus.NEW);
var table3 = new Table_1.Table(3, 2, Tablestatus_1.Tablestatus.NEW);
var table4 = new Table_1.Table(4, 2, Tablestatus_1.Tablestatus.NEW);
var insideorder1 = new Orderinside_1.Insideorder(1, Ordercategory_1.OrderCategory.INSIDE_ORDER, date1, waiter2, lin);
var insideorder2 = new Orderinside_1.Insideorder(2, Ordercategory_1.OrderCategory.INSIDE_ORDER, date1, banana, chorkev);
var insideorder3 = new Orderinside_1.Insideorder(3, Ordercategory_1.OrderCategory.INSIDE_ORDER, date3, banana, seavheng);
var insideorder4 = new Orderinside_1.Insideorder(4, Ordercategory_1.OrderCategory.INSIDE_ORDER, date5, banana, seavheng);
var outsideorder1 = new Orderoutside_1.Outsideorder(1, Ordercategory_1.OrderCategory.OUTSIDE_ORDER, date2, nora);
var outsideorder2 = new Orderoutside_1.Outsideorder(2, Ordercategory_1.OrderCategory.OUTSIDE_ORDER, date2, shika);
var outsideorder3 = new Orderoutside_1.Outsideorder(3, Ordercategory_1.OrderCategory.OUTSIDE_ORDER, date3, romdual);
var pay1 = new paydirectmoney_1.Paydirectmoney(5, insideorder1);
var pay2 = new paybybankaccount_1.Paybybankaccount("200 090 333", 5, outsideorder1);
var pay3 = new paydirectmoney_1.Paydirectmoney(5, insideorder2);
var pay4 = new paydirectmoney_1.Paydirectmoney(5, insideorder3);
var pay5 = new paydirectmoney_1.Paydirectmoney(5, insideorder4);
var booking1 = new Booking_1.Booking(2, 1, romdual, date1, date1Arried);
var booking2 = new Booking_1.Booking(1, 2, shika, date2, date2Arried);
var booking3 = new Booking_1.Booking(1, 2, shika, date3, date3Arried);
var booking4 = new Booking_1.Booking(1, 2, nora, date4, date4Arried);
KakoRestraurant.personmanagement.addStaff(apple);
KakoRestraurant.personmanagement.addStaff(banana);
KakoRestraurant.personmanagement.addStaff(coconut);
KakoRestraurant.personmanagement.addStaff(DragonFruit);
insideorder1.addFood(cocacola);
insideorder1.addFood(korko);
insideorder2.addFood(greenTea);
insideorder2.addFood(korko);
insideorder3.addFood(cocacola);
insideorder3.addFood(korko);
insideorder4.addFood(cocacola);
insideorder4.addFood(korko);
outsideorder1.addFood(cocacola);
outsideorder1.addFood(loklak);
outsideorder1.addFood(greenTea);
outsideorder2.addFood(cocacola);
outsideorder3.addFood(loklak);
outsideorder3.addFood(greenTea);
table1.setOrder(insideorder1);
table2.setOrder(insideorder2);
table3.setOrder(insideorder3);
table4.setOrder(insideorder4);
paymentmanagement.addPay(pay1);
paymentmanagement.addPay(pay2);
paymentmanagement.addPay(pay3);
paymentmanagement.addPay(pay4);
paymentmanagement.addPay(pay5);
soupMenu.addFood(korko);
soupMenu.addFood(proher);
drinkMenu.addFood(greenTea);
drinkMenu.addFood(cocacola);
meatMenu.addFood(loklak);
desertMenu.addFood(saray);
desertMenu.addFood(bonamSiem);
KakoRestraurant.personmanagement.addOutsideCustomer(romdual);
KakoRestraurant.personmanagement.addOutsideCustomer(shika);
KakoRestraurant.personmanagement.addOutsideCustomer(nora);
KakoRestraurant.personmanagement.addInsideCustomer(nika);
KakoRestraurant.personmanagement.addInsideCustomer(chorkev);
KakoRestraurant.personmanagement.addInsideCustomer(lin);
KakoRestraurant.personmanagement.addInsideCustomer(seavheng);
tablemanagement.addTable(table1);
tablemanagement.addTable(table2);
tablemanagement.addTable(table3);
tablemanagement.addTable(table4);
kitchenmanagement.addFoodmenu(soupMenu);
kitchenmanagement.addFoodmenu(drinkMenu);
kitchenmanagement.addFoodmenu(meatMenu);
kitchenmanagement.addFoodmenu(desertMenu);
ordermanagement.addOrder(insideorder1);
ordermanagement.addOrder(insideorder2);
ordermanagement.addOrder(insideorder3);
ordermanagement.addOrder(insideorder4);
ordermanagement.addOrder(outsideorder1);
ordermanagement.addOrder(outsideorder2);
ordermanagement.addOrder(outsideorder3);
bookingManagement.addBooking(booking1);
bookingManagement.addBooking(booking2);
bookingManagement.addBooking(booking3);
bookingManagement.addBooking(booking4);
KakoRestraurant.paymentManagement = paymentmanagement;
KakoRestraurant.kitchenmanagement = kitchenmanagement;
KakoRestraurant.ordersmanagement = ordermanagement;
KakoRestraurant.tablemanagement = tablemanagement;
console.log(insideorder1);
console.log(insideorder2);
console.log(ordermanagement.getOrderPaid());
=======
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
>>>>>>> d6d32b0847596c63c673e63a71c92a2a3a70e78c
