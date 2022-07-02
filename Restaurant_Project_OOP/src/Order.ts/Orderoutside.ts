import { Datetime } from "../date/Datetime";
import { Food } from "../kitchen/Food";
import { OutsideCustomer } from "../person/customer/Customer";
import { Order } from "./Order";
import { OrderCategory } from "./Ordercategory";

export class Outsideorder extends Order{
    private foodorder:Food[]=[]
    constructor(
        id:number, 
        category:OrderCategory,
        date:Datetime,
        private customer:OutsideCustomer,
        ){
            super(id,category,date);
        }

       addFood(food:Food){
            this.foodorder.push(food);
       }

       gedFoods():Food[]{
        return this.foodorder;
       }
       orderTotalPrice():number {
        let totalprice = 0;
        let foods = this.foodorder;
        for (let i=0;i<foods.length;i++){
            totalprice += foods[i].getPrice();
        }
        return totalprice;
    }
}