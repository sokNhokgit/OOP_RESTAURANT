import { Location } from "./Location";
import { TableManagement } from "./table/TableManagement";
import { PersonManagement } from "./person/PersonManagement";
import { KitchenManagement } from "./kitchen/kitchenManagement";
import { OrderManagement } from "./Order.ts/OrderManagement";
import { PaymentManagement } from "./payment/paymentManagement";

export class Restraurant {
    public tablemanagement:TableManagement = new TableManagement();
    public personmanagement:PersonManagement= new PersonManagement ();
    public kitchenmanagement:KitchenManagement= new KitchenManagement ();
    public ordersmanagement:OrderManagement= new OrderManagement ();
    public paymentManagement:PaymentManagement = new PaymentManagement()

    constructor(protected name: string, protected location: Location){}
}