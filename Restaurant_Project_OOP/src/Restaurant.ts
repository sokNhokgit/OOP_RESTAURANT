import { Location } from "./Location";
import { TableManagement } from "./table/TableManagement";
import { PersonManagement } from "./person/PersonManagement";
import { KitchenManagement } from "./kitchen/kitchenManagement";
import { OrderManagement } from "./Order.ts/OrderManagement";
import { BookingManagement } from "./Booking/BookingManagement";
import { PaymentManagement } from "./payment/paymentManagement";
import { DeliveryManagement } from "./delivery/DeliveryManagement";

export class Restaurant {
    public tablemanagement:TableManagement = new TableManagement();
    public personmanagement:PersonManagement= new PersonManagement ();
    public kitchenmanagement:KitchenManagement= new KitchenManagement ();
    public ordersmanagement:OrderManagement= new OrderManagement ();
    public bookingmanagement:BookingManagement = new BookingManagement();
    public paymentManagement:PaymentManagement = new PaymentManagement();
    public bookmanagement:BookingManagement = new BookingManagement();
    public deliverymanagement:DeliveryManagement = new DeliveryManagement();

    constructor(protected name: string, protected location: Location){}
}