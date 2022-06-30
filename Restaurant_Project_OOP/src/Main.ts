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


