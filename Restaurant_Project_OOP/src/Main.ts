import { Booking } from "./Booking/Booking";
import { Datetime } from "./date/Datetime";
import { Delivery } from "./delivery/Delivery";
import { Food } from "./kitchen/Food";
import { FoodCategory } from "./kitchen/FoodCategory";
import { FoodMenu } from "./kitchen/FoodMenu";
import { Location } from "./Location";
import { InsideCustomer, OutsideCustomer } from "./person/customer/Customer";
import { Deliverer, Vehicle } from "./person/deliverer/Deliverer";
import { Gender } from "./person/Gender";
import { Chef } from "./person/staff/Chef";
import { Cleaner } from "./person/staff/Cleaner";
import { Security } from "./person/staff/Security";
import { StaffCategory } from "./person/staff/StaffCategories";
import { Waiter } from "./person/staff/Waiter";
import { Restaurant } from "./Restaurant";
import { Table } from "./table/Table";
import { TableManagement } from "./table/TableManagement";
import { Tablestatus } from "./table/Tablestatus";

<<<<<<< HEAD
let location1 = new Location('Norodom', 'Phnom Peng');
let location2 = new Location('Sisovat', 'Phnom Peng');
let location3 = new Location('Mean Chey', 'Phnom Peng');
let location4 = new Location('395', 'Siem Reap');
let location5 = new Location('5', 'Banteay Mean Chey');
let KakoRestraurant = new Restraurant('Kako Restraurant', location4);
let apple = new Chef('Apple', 29, Gender.MALE,977403175);
let banana = new Waiter('Banana', 35, Gender.FEMALE,977493175);
let waiter2 = new Waiter('waiter2',23,Gender.FEMALE,977493175);
let coconut = new Security('Coconut', 32, Gender.MALE,977493175);
let DragonFruit = new Cleaner('DragonFruit', 40, Gender.FEMALE,977493175);
let kitchenmanagement = new KitchenManagement();
let ordermanagement = new OrderManagement();
let paymentmanagement = new PaymentManagement();
let bookingManagement = new BookingManagement();
let tablemanagement = new TableManagement();
let personManagement = new PersonManagement();
let date1 = new Datetime(11,11,2022,1);
let date1Arried = new Datetime(11,11,2022,1.15);
let date2 = new Datetime(12,11,2022,2);
let date2Arried = new Datetime(11,11,2022,2.15);
let date3 = new Datetime(13,11,2022,3);
let date3Arried = new Datetime(11,11,2022,3.15);
let date4 = new Datetime(14,11,2022,4);
let date4Arried = new Datetime(11,11,2022,4.15);
let date5 = new Datetime(15,11,2022,5);
let date5Arried = new Datetime(11,11,2022,5.15);
let romdual = new OutsideCustomer('Romdual', 25, Gender.FEMALE, 929394959, location1);
let shika = new OutsideCustomer('Shika', 30, Gender.FEMALE, 839248678, location2);
let nora = new OutsideCustomer('Nora', 40, Gender.MALE, 998943234, location3);
let nika = new InsideCustomer(1);
let chorkev = new InsideCustomer(2);
let lin = new InsideCustomer(3);
let seavheng = new InsideCustomer(4);
let soupMenu = new FoodMenu(FoodCategory.SOUP);
let drinkMenu = new FoodMenu(FoodCategory.DRINK);
let meatMenu = new FoodMenu(FoodCategory.MEAT);
let desertMenu = new FoodMenu(FoodCategory.DESERT);
let korko = new Food(1,"Somlor kor ko",5);
let greenTea = new Food(2,"Green Tea",1);
let loklak = new Food(3,"loklak",5);
let proher = new Food(4,"proher",5); 
let cocacola = new Food(5,"cocacola",2);
let saray = new Food(6,"saray",1);
let bonamSiem = new Food(7,"bongAmSiem",1);
let table1 = new Table(1,2,Tablestatus.NEW);
let table2 = new Table(2,2,Tablestatus.NEW);
let table3 = new Table(3,2,Tablestatus.NEW);
let table4 = new Table(4,2,Tablestatus.NEW);
let insideorder1 = new Insideorder(1,OrderCategory.INSIDE_ORDER,date1,waiter2,lin);
let insideorder2 = new Insideorder(2,OrderCategory.INSIDE_ORDER,date1,banana,chorkev);
let insideorder3 = new Insideorder(3,OrderCategory.INSIDE_ORDER,date3,banana,seavheng);
let insideorder4 = new Insideorder(4,OrderCategory.INSIDE_ORDER,date5,banana,seavheng);
let outsideorder1 = new Outsideorder(1,OrderCategory.OUTSIDE_ORDER,date2,nora);
let outsideorder2 = new Outsideorder(2,OrderCategory.OUTSIDE_ORDER,date2,shika);
let outsideorder3 = new Outsideorder(3,OrderCategory.OUTSIDE_ORDER,date3,romdual);
let pay1 = new Paydirectmoney(5,insideorder1);
let pay2 = new Paybybankaccount("200 090 333",5,outsideorder1);
let pay3 = new Paydirectmoney(5,insideorder2);
let pay4 = new Paydirectmoney(5,insideorder3);
let pay5 = new Paydirectmoney(5,insideorder4);
let booking1 = new Booking(2,1, romdual, date1, date1Arried);
let booking2 = new Booking(1, 2, shika, date2, date2Arried);
let booking3 = new Booking(1, 2, shika, date3, date3Arried);
let booking4 = new Booking(1, 2, nora, date4, date4Arried);

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

console.log(ordermanagement);
=======
/**
 * create location
*/
let location1 = new Location('Norodom', 'Phnom Penh');
let location2 = new Location('2004', 'Phnom Penh');
let location3 = new Location('5', 'Banteay Mean Chey');
let location4 = new Location('6', 'Batt Dombang');
let location5 = new Location('251', 'Siem Reap');

/**
 * create restaurant
 */
let KakoRestaurant = new Restaurant('KakoRestaurant', location1);

// create staff =================================================
/**
 * create chef
 */
let chefBora = new Chef('Bora', 32, Gender.MALE, 123456789);
let chefPhanna = new Chef('Phanna', 26, Gender.MALE, 987654321);
let chefNorea = new Chef('Norea', 22, Gender.FEMALE, 999995555);
KakoRestaurant.personmanagement.addStaff(chefBora)
KakoRestaurant.personmanagement.addStaff(chefPhanna)
KakoRestaurant.personmanagement.addStaff(chefNorea);

/**
 * create waiter
 */
let waiterReaksmey = new Waiter('Reaksmey', 19, Gender.FEMALE, 111111111);
let waiterNita = new Waiter('Reaksmey', 23, Gender.FEMALE, 222222222);
let waiterOusa = new Waiter('Reaksmey', 21, Gender.MALE, 333333333);
KakoRestaurant.personmanagement.addStaff(waiterReaksmey)
KakoRestaurant.personmanagement.addStaff(waiterNita)
KakoRestaurant.personmanagement.addStaff(waiterOusa)

/**
 * create security
 */
let securitySothea = new Security('Sothea', 32, Gender.MALE, 4444444444);
KakoRestaurant.personmanagement.addStaff(securitySothea)

/**
 * create cleaner
 */
let cleanerTar = new Cleaner('Tar', 52, Gender.FEMALE, 55555555555);
let cleanerNea = new Cleaner('Nea', 42, Gender.FEMALE, 6666666666);
let cleanerJa = new Cleaner('Ja', 42, Gender.FEMALE, 7777777777);
KakoRestaurant.personmanagement.addStaff(cleanerJa)
KakoRestaurant.personmanagement.addStaff(cleanerNea)
KakoRestaurant.personmanagement.addStaff(cleanerTar)

// create customer ====================================================================
/**
 * create inside customer
 */
let insideCustomer1 = new InsideCustomer(1);
let insideCustomer2 = new InsideCustomer(2);
let insideCustomer3 = new InsideCustomer(3);
let insideCustomer4 = new InsideCustomer(4);
KakoRestaurant.personmanagement.addInsideCustomer(insideCustomer1);
KakoRestaurant.personmanagement.addInsideCustomer(insideCustomer2);
KakoRestaurant.personmanagement.addInsideCustomer(insideCustomer3);
KakoRestaurant.personmanagement.addInsideCustomer(insideCustomer4);

/**
 * create outside customer
 */
let outsideCustomer1 = new OutsideCustomer('Yo', 25, Gender.MALE, 1212121212, location2);
let outsideCustomer2 = new OutsideCustomer('Bo', 25, Gender.MALE, 123123123, location3);
let outsideCustomer3 = new OutsideCustomer('Na', 25, Gender.FEMALE, 123412341, location2);
let outsideCustomer4 = new OutsideCustomer('Ra', 25, Gender.FEMALE, 123451234, location3);
KakoRestaurant.personmanagement.addOutsideCustomer(outsideCustomer1);
KakoRestaurant.personmanagement.addOutsideCustomer(outsideCustomer2);
KakoRestaurant.personmanagement.addOutsideCustomer(outsideCustomer3);
KakoRestaurant.personmanagement.addOutsideCustomer(outsideCustomer4);

// create delivery =====================================================================
/**
 * create delivery
 */
let deliverer1 = new Deliverer('Mora', 28, Gender.MALE, 98123456789, Vehicle.MOTORCYCLE);
let deliverer2 = new Deliverer('Nata', 28, Gender.MALE, 98123456789, Vehicle.MOTORCYCLE);
let deliverer3 = new Deliverer('Mike', 28, Gender.MALE, 98123456789, Vehicle.MOTORCYCLE);
let deliverer4 = new Deliverer('Mark', 28, Gender.MALE, 98123456789, Vehicle.MOTORCYCLE);
KakoRestaurant.personmanagement.addDeliverer(deliverer1);
KakoRestaurant.personmanagement.addDeliverer(deliverer2);
KakoRestaurant.personmanagement.addDeliverer(deliverer3);
KakoRestaurant.personmanagement.addDeliverer(deliverer4);

// create table ========================================================================
/**
 * create table
 */
let table1 = new Table(1, 4, Tablestatus.NEW);
let table2 = new Table(2, 8, Tablestatus.NEW);
let table3 = new Table(3, 5, Tablestatus.NEW);
let table4 = new Table(4, 4, Tablestatus.NEW);
let table5 = new Table(5, 6, Tablestatus.NEW);
let table6 = new Table(6, 8, Tablestatus.NEW);
let table7 = new Table(7, 10, Tablestatus.NEW);
let table8 = new Table(8, 6, Tablestatus.NEW);
let table9 = new Table(9, 6, Tablestatus.NEW);
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
let desert = new FoodMenu(FoodCategory.DESERT);
let drink = new FoodMenu(FoodCategory.DRINK);
let fish = new FoodMenu(FoodCategory.FISH);
let meat = new FoodMenu(FoodCategory.MEAT);
let soup = new FoodMenu(FoodCategory.SOUP);
let vegetable = new FoodMenu(FoodCategory.VEGETABLE);

/**
 * create food
 */
let food1 = new Food(1, 'desert', 2);
let food2 = new Food(2, 'drink', 1);
let food3 = new Food(1, 'fish', 8);
let food4 = new Food(1, 'meat', 2);
let food5 = new Food(1, 'soup', 2);
let food6 = new Food(1, 'vegetable', 2);

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
let date1 = new Datetime(12, 5, 2022, 8);
let date2 = new Datetime(13, 5, 2022, 5);
let date3 = new Datetime(23, 5, 2022, 1);
let date4 = new Datetime(24, 5, 2022, 5);
let date5 = new Datetime(29, 5, 2022, 8);
let date6 = new Datetime(31, 5, 2022, 4);

// booking table =====================================================================
/**
 * booking table
 */
let book1 = new Booking(1, 10, outsideCustomer1, date1,date2);
let book2 = new Booking(1, 2, outsideCustomer2, date3,date4);
let book3 = new Booking(1, 5, outsideCustomer3, date5,date6);
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
console.log(KakoRestaurant.tablemanagement.getAllTableByChair(4));
console.log('=============== get a table ================');
console.log(KakoRestaurant.tablemanagement.findfreeTable());
console.log('=============== get food menu ================');
console.log(KakoRestaurant.kitchenmanagement.getfoodMenu());
console.log('=============== get food menu by category ================');
console.log(KakoRestaurant.kitchenmanagement.getFoodmenuwithCategory(FoodCategory.DESERT));
console.log('=============== get all booking ================');
console.log(KakoRestaurant.bookingmanagement.getAllBooking());
console.log('=============== get all booking ================');
console.log(KakoRestaurant.bookingmanagement.getAllBookingByCustomer(outsideCustomer1));
>>>>>>> d6d32b0847596c63c673e63a71c92a2a3a70e78c


