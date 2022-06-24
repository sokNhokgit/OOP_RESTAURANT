import { Gender } from "./person/Gender";
import { PersonManagement } from "./person/PersonManagement";
import { Chef } from "./person/staff/Chef";
import { Cleaner } from "./person/staff/Cleaner";
import { Security } from "./person/staff/Security";
import { StaffCategory } from "./person/staff/StaffCategories";
import { Waiter } from "./person/staff/Waiter";

let apple = new Chef('Apple', 29, Gender.MALE, StaffCategory.CHIEF);
let banana = new Waiter('Banana', 35, Gender.FEMALE, StaffCategory.WAITER);
let coconut = new Security('Coconut', 32, Gender.MALE, StaffCategory.SECURITY);
let DragonFruit = new Cleaner('DragonFruit', 40, Gender.FEMALE, StaffCategory.CLEANER);

let personManagement = new PersonManagement();
personManagement.addStaff(apple);
personManagement.addStaff(banana);
personManagement.addStaff(coconut);
personManagement.addStaff(DragonFruit);

// console.log(personManagement.getAllStaff());
console.log(personManagement.getOnlyStaffCategory(StaffCategory.CHIEF));

import { Food } from "./kitchen/Food";
import { FoodManagement } from "./kitchen/FoodManagement";
import { FoodCategory } from "./kitchen/FoodCategory";
import { FoodMenu } from "./kitchen/FoodMenu";
import { OrderManagement } from "./Order.ts/OrderManagement";
import { Orderlist } from "./Order.ts/Orderlist";
import { Order } from "./Order.ts/Order";

// management 
let foodManagement = new FoodManagement();
let orderManagement = new OrderManagement();

// Menu foods
let foodMenu1 = new FoodMenu(FoodCategory.SOUP);
let foodMenu2 = new FoodMenu(FoodCategory.DRINK);
let foodMenu3 = new FoodMenu(FoodCategory.MEAT);
let foodMenu4 = new FoodMenu(FoodCategory.DESERT);

//orderlist
let orderlisttable1 = new Orderlist(1);
let orderlisttable2 = new Orderlist(2);
let orderlisttable3 = new Orderlist(3);
let orderlisttable4 = new Orderlist(4);

// foods Items
let korko = new Food(1,"Somlor kor ko",5,FoodCategory.SOUP);
let greenTea = new Food(2,"Green Tea",1,FoodCategory.DRINK);
let loklak = new Food(3,"loklak",5,FoodCategory.MEAT);
let proher = new Food(4,"proher",5,FoodCategory.SOUP); 
let cocacola = new Food(5,"cocacola",2,FoodCategory.DRINK);
let saray = new Food(6,"saray",1,FoodCategory.DESERT);
let bonamSiem = new Food(7,"bongAmSiem",1,FoodCategory.DESERT);

// order
let customer1order = new Order(1,1,korko,1);
let customer2order = new Order(2,2,greenTea,1);
let customer3order = new Order(3,3,proher,1);
let customer4order = new Order(4,4,loklak,1);

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
