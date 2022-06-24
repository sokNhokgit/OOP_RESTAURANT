import { FoodMenu } from "./FoodMenu";

export class FoodManagement{
    private foodsmenu:FoodMenu[]=[];

    addFoodmenu(foodmenu:FoodMenu){
        this.foodsmenu.push(foodmenu);
    }

    getfoodMenu():FoodMenu[]{
        return this.foodsmenu;
    }
}