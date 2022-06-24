import { Gender } from "./person/Gender";
import { PersonManagement } from "./person/PersonManagement";
import { Chief } from "./person/staff/Chief";
import { Cleaner } from "./person/staff/Cleaner";
import { Security } from "./person/staff/Security";
import { StaffCategory } from "./person/staff/StaffCategories";
import { Waiter } from "./person/staff/Waiter";

let apple = new Chief('Apple', 29, Gender.MALE, StaffCategory.CHIEF);
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

