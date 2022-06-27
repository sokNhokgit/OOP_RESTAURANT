import { Location } from "./Location";
import { TableManagement } from "./table/TableManagement";
import { PersonManagement } from "./person/PersonManagement";
import { KitchenManagement } from "./kitchen/kitchenManagement";
import { OrderManagement } from "./Order.ts/OrderManagement";

export class Restraurant {
    
    constructor(private name: string, private location: Location){}
    public tablemanagement:TableManagement = new TableManagement();
    public personmanagement:PersonManagement= new PersonManagement ();
    public kitchenmanagement:KitchenManagement= new KitchenManagement ();
    public ordersmanagement:OrderManagement= new OrderManagement ();
}