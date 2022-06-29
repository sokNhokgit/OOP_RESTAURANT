import { FoodCategory } from "./FoodCategory";

export class Food {
    constructor(private foodid:number,private name:string, private price:number){}


    getid():number{
        return this.foodid;
    }

    getName():string{
        return this.name;
    }

    getPrice():number{
        return this.price;
    }
    equalFood(food:Food){
        return this.foodid === food.getid() && this.name === food.getName() && this.price === food.getPrice();
    }
}