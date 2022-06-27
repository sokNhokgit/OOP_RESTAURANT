import { Food } from "./Food";
import { FoodCategory } from "./FoodCategory";
export class FoodMenu {
    private foods:Food[]=[];
    constructor(private category:FoodCategory){}

    setFoodmenuCategory(category:FoodCategory){
        this.category = category;
    }

    getFoodmenuCategory():FoodCategory{
        return this.category;
    }

    addFood(food:Food){
        this.foods.push(food)
    }

    getFood():Food[]{
        return this.foods;
    }

    foodMenuisEqual(foodmenucategory:FoodCategory){
        return this.category == foodmenucategory;
    }
}