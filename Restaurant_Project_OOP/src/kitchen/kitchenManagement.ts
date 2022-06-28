import { FoodCategory } from "./FoodCategory";
import { FoodMenu } from "./FoodMenu";

export class KitchenManagement{
    private foodsmenu:FoodMenu[]=[];

    addFoodmenu(foodmenu:FoodMenu){
        this.foodsmenu.push(foodmenu);
    }

    getfoodMenu():FoodMenu[]{
        return this.foodsmenu;
    }

    getFoodmenuwithCategory(foodcategory:FoodCategory):FoodMenu | undefined{
        let foodsmenu = this.foodsmenu;
        for (let i=0;i<foodsmenu.length;i++){
            if (foodsmenu[i].foodMenuisEqual(foodcategory)){
               return foodsmenu[i];
            }
        }
        return undefined;
    }
}