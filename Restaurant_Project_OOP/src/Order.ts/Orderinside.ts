import { Order } from "./Order";
import { InsideCustomer } from "../person/customer/Customer";
import { Food } from "../kitchen/Food";
import { Waiter } from "../person/staff/Waiter";
import { OrderCategory } from "./Ordercategory";
import { Datetime } from "../date/Datetime";


export class Insideorder extends Order{
    private foododer:Food[]=[]
    constructor(
        id:number,
        category:OrderCategory,
        date:Datetime,
        private waiter:Waiter,
        private customer:InsideCustomer
        ){
            super(id,category,date)
        }

        getWaiter():Waiter{
            return this.waiter;
        }

        addFood(food:Food){
            this.foododer.push(food);
        }
        gedFoods():Food[]{
            return this.foododer;
        }

        orderTotalPrice():number {
            let totalprice = 0;
            let foods = this.foododer;
            for (let i=0;i<foods.length;i++){
                totalprice += foods[i].getPrice();
            }
            return totalprice;
        }
}