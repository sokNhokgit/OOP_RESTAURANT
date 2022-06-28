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
import { Datetime } from "./date/Datetime";
import { Paybybankaccount } from "./payment/paybybankaccount";
import { Paydirectmoney } from "./payment/paydirectmoney";
import { PaymentManagement } from "./payment/paymentManagement";
/**
 * create location
 */
let location1 = new Location(1004, 'Norodom', 'Phnom Peng');
let location2 = new Location(2004, 'Sisovat', 'Phnom Peng');
let location3 = new Location(3004, 'Mean Chey', 'Phnom Peng');
/**
 * create restraurant
 */
let restraurant = new Restraurant('restraurant', location1);

/**
 * create staff
 */
let apple = new Chef('Apple', 29, Gender.MALE, StaffCategory.CHIEF);
let banana = new Waiter('Banana', 35, Gender.FEMALE, StaffCategory.WAITER);
let coconut = new Security('Coconut', 32, Gender.MALE, StaffCategory.SECURITY);
let DragonFruit = new Cleaner('DragonFruit', 40, Gender.FEMALE, StaffCategory.CLEANER);

/**
 * create date time
 */
let date1 = new Datetime(12,11,2022,4);
let date2 = new Datetime(25,11,2022,2);
let date3 = new Datetime(11,11,2022,9);
let date4 = new Datetime(15,11,2022,7);
let date5 = new Datetime(8,11,2022,8);

/**
 * add staff to staff list
 */
let personManagement = new PersonManagement();
personManagement.addStaff(apple);
personManagement.addStaff(banana);
personManagement.addStaff(coconut);
personManagement.addStaff(DragonFruit);


/**
 * create outside customer
 */
let romdual = new OutsideCustomer('Romdual', 25, Gender.FEMALE, location1, '0929394959');
let shika = new OutsideCustomer('Shika', 30, Gender.FEMALE, location2, '0839248678');
let nora = new OutsideCustomer('Nora', 40, Gender.MALE, location3, '0998943234');

/**
 * create customer inside
 */
let nika = new InsideCustomer(1);
let chorkev = new InsideCustomer(2);
let lin = new InsideCustomer(3);
let seavheng = new InsideCustomer(4);

/**
 * create food management
 */
let foodManagement = new KitchenManagement();
/**
 * create order management
 */
let orderManagement = new OrderManagement();

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
let tablemanagement = new TableManagement();
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

console.log(paymentmanagement.isOrdergetPaid(outsideorder1));
                                                   