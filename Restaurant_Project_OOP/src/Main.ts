import { Gender } from "./person/Gender";
import { PersonManagement } from "./person/PersonManagement";
import { Chef } from "./person/staff/Chef";
import { Cleaner } from "./person/staff/Cleaner";
import { Security } from "./person/staff/Security";
import { StaffCategory } from "./person/staff/StaffCategories";
import { Waiter } from "./person/staff/Waiter";
import { Food } from "./kitchen/Food";
import { KitchenManagement } from "./kitchen/kitchenManagement";
import { FoodCategory } from "./kitchen/FoodCategory";
import { FoodMenu } from "./kitchen/FoodMenu";
import { OrderManagement } from "./Order.ts/OrderManagement";
import { Outsideorder } from "./Order.ts/Orderoutside";
import { Insideorder } from "./Order.ts/Orderinside";
import { InsideCustomer, OutsideCustomer } from "./person/customer/Customer";
import { Location } from "./Location";
import { Restraurant } from "./Restraurant";
import { Table } from "./table/Table";
import { Tablestatus } from "./table/Tablestatus";
import { TableManagement } from "./table/TableManagement";
import { CustomerManagement } from "./person/customer/CustomerManagement";
import { Datetime } from "./date/Datetime";
import { Paybybankaccount } from "./payment/paybybankaccount";
import { Paydirectmoney } from "./payment/paydirectmoney";
import { PaymentManagement } from "./payment/paymentManagement";
import { Booking } from "./Booking/Booking";
import { BookingManagement } from "./Booking/BookingManagement";

/**
 * create location
 */
let location1 = new Location('Norodom', 'Phnom Peng');
let location2 = new Location('Sisovat', 'Phnom Peng');
let location3 = new Location('Mean Chey', 'Phnom Peng');
let location4 = new Location('395', 'Siem Reap');
let location5 = new Location('5', 'Banteay Mean Chey');
/**
 * create restraurant
 */
let restraurant = new Restraurant('restraurant', location1);
let KakoRestraurant = new Restraurant('Kako Restraurant', location4);

/**
 * create staff
 */
let apple = new Chef('Apple', 29, Gender.MALE, 987654321, StaffCategory.CHIEF);
let banana = new Waiter('Banana', 35, Gender.FEMALE, 123456789, StaffCategory.WAITER);
let coconut = new Security('Coconut', 32, Gender.MALE, 918273645, StaffCategory.SECURITY);
let DragonFruit = new Cleaner('DragonFruit', 40, Gender.FEMALE, 123498765, StaffCategory.CLEANER);
let koko = new Chef('koko', 32, Gender.MALE, 987654321, StaffCategory.CHIEF);
let vela = new Cleaner('Vela', 43, Gender.FEMALE, 123456789, StaffCategory.CLEANER);
let kim = new Security('Kim', 28, Gender.MALE, 678954321, StaffCategory.SECURITY);
let bobo = new Waiter('Bobo', 25, Gender.FEMALE, 214365879, StaffCategory.WAITER)

/**
 * add staff to staff list
 */
// let personManagement = new PersonManagement();
KakoRestraurant.personmanagement.addStaff(apple);
KakoRestraurant.personmanagement.addStaff(banana);
KakoRestraurant.personmanagement.addStaff(coconut);
KakoRestraurant.personmanagement.addStaff(DragonFruit);


/**
 * create outside customer
 */
let romdual = new OutsideCustomer('Romdual', 25, Gender.FEMALE, 929394959, location1);
let shika = new OutsideCustomer('Shika', 30, Gender.FEMALE, 839248678, location2);
let nora = new OutsideCustomer('Nora', 40, Gender.MALE, 998943234, location3);

/**
 * create customer inside
 */
let nika = new InsideCustomer(1);
let chorkev = new InsideCustomer(2);
let lin = new InsideCustomer(3);
let seavheng = new InsideCustomer(4);

/**
 * add customer to the list
 */
KakoRestraurant.personmanagement.addOutsideCustomer(romdual);
KakoRestraurant.personmanagement.addOutsideCustomer(shika);
KakoRestraurant.personmanagement.addOutsideCustomer(nora);

KakoRestraurant.personmanagement.addInsideCustomer(nika);
KakoRestraurant.personmanagement.addInsideCustomer(chorkev);
KakoRestraurant.personmanagement.addInsideCustomer(lin);
KakoRestraurant.personmanagement.addInsideCustomer(seavheng);

// Menu foods
let soupMenu = new FoodMenu(FoodCategory.SOUP);
let drinkMenu = new FoodMenu(FoodCategory.DRINK);
let meatMenu = new FoodMenu(FoodCategory.MEAT);
let desertMenu = new FoodMenu(FoodCategory.DESERT);

/**
 * create food item
*/
let korko = new Food(1,"Somlor kor ko",5);
let greenTea = new Food(2,"Green Tea",1);
let loklak = new Food(3,"loklak",5);
let proher = new Food(4,"proher",5); 
let cocacola = new Food(5,"cocacola",2);
let saray = new Food(6,"saray",1);
let bonamSiem = new Food(7,"bongAmSiem",1);

/**
 *create table  and table management
 */
let table1 = new Table(1,2,Tablestatus.NEW);
let table2 = new Table(2,2,Tablestatus.NEW);
let table3 = new Table(3,2,Tablestatus.NEW);
let table4 = new Table(4,2,Tablestatus.NEW);

/**
 * order inside
 */
let insideorder1 = new Insideorder(1,korko,1,nika);
let insideorder2 = new Insideorder(2,greenTea,1,chorkev);
let insideorder3 = new Insideorder(3,proher,1,lin);
let insideorder4 = new Insideorder(4,loklak,1,seavheng);

/**
 * add inside order to the table and add table into table management
 */
// table1.setOrder(insideorder1);
// table2.setOrder(insideorder2);
table3.setOrder(insideorder3);
table4.setOrder(insideorder4);

KakoRestraurant.tablemanagement.addTable(table1);
KakoRestraurant.tablemanagement.addTable(table2);
KakoRestraurant.tablemanagement.addTable(table3);
KakoRestraurant.tablemanagement.addTable(table4);


/**
 * create date time
 */
let date1 = new Datetime(12,11,2022,4);
let date2 = new Datetime(25,11,2022,2);
let date3 = new Datetime(11,11,2022,9);
let date4 = new Datetime(15,11,2022,7);
let date5 = new Datetime(8,11,2022,8);

/***
 * order outside
 */
let outsideorder1 = new Outsideorder(1,cocacola,1,date1,romdual);
let outsideorder2 = new Outsideorder(2,korko,2,date2,shika);
let outsideorder3 = new Outsideorder(3,loklak,1,date3,nora);

/**
 * create payment and payment management
 */
let paymentmanagement = new PaymentManagement();
let pay1 = new Paydirectmoney(5,insideorder1);
let pay2 = new Paybybankaccount("200 090 333",5,outsideorder1);
paymentmanagement.addPay(pay1);
paymentmanagement.addPay(pay2);
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
KakoRestraurant.kitchenmanagement.addFoodmenu(soupMenu);
KakoRestraurant.kitchenmanagement.addFoodmenu(drinkMenu);
KakoRestraurant.kitchenmanagement.addFoodmenu(meatMenu);
KakoRestraurant.kitchenmanagement.addFoodmenu(desertMenu);

/**
 * add order list inside and outside into order management
 */
KakoRestraurant.ordersmanagement.addOrderinside(insideorder1);
KakoRestraurant.ordersmanagement.addOrderinside(insideorder2);
KakoRestraurant.ordersmanagement.addOrderinside(insideorder3);
KakoRestraurant.ordersmanagement.addOrderinside(insideorder4);
KakoRestraurant.ordersmanagement.addOrderoutside(outsideorder1);
KakoRestraurant.ordersmanagement.addOrderoutside(outsideorder2);
KakoRestraurant.ordersmanagement.addOrderoutside(outsideorder3);

/**
 * get booking from out side
 */
let booking1 = new Booking(2, 10, romdual, date1, date2);
let booking2 = new Booking(1, 2, shika, date1, date2);
let booking3 = new Booking(1, 2, shika, date1, date2);
let booking4 = new Booking(1, 2, nora, date3, date4);

/**
 * add booking to booking Management
 */
let bookingManagement = new BookingManagement();
bookingManagement.addBooking(booking1);
bookingManagement.addBooking(booking2);
bookingManagement.addBooking(booking3);
bookingManagement.addBooking(booking4);

console.log(KakoRestraurant.kitchenmanagement.getFoodmenuwithCategory(FoodCategory.DRINK));
console.log('================= get food menu ==================');
console.log(KakoRestraurant.kitchenmanagement.getfoodMenu());
console.log('================= get table free ==================');
console.log(KakoRestraurant.tablemanagement.tablefree());
console.log('================= get all table ==================');
console.log(KakoRestraurant.tablemanagement.getTable());
console.log('================= get all staff ==================');
console.log(KakoRestraurant.personmanagement.getAllStaff());
console.log('================= get all staff by salary ==================');
console.log(KakoRestraurant.personmanagement.getAllStaffBySalary(0));
console.log('================= get all staff by category ==================');
console.log(KakoRestraurant.personmanagement.getOnlyStaffCategory(StaffCategory.CHIEF));
console.log('================= get all inside customer ==================');
console.log(KakoRestraurant.personmanagement.getAllInsideCustomer());
console.log('================= get all outside customer ==================');
console.log(KakoRestraurant.personmanagement.getAllOutsideCustomer());
console.log('================= get table by the number of chair ==================');
console.log(KakoRestraurant.tablemanagement.getTableByChair(2));
console.log('================= check if user get pay ================');
console.log(paymentmanagement.isOrdergetPaid(outsideorder1));   
console.log('================= get all booking ===================');
console.log(bookingManagement.getAllBooking());
console.log('================= get outside order =================');
console.log(KakoRestraurant.ordersmanagement.getOrderoutside());


                                            