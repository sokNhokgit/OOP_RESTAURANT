import { Gender } from "../Gender";
import { Staff } from "./Staff";
import { StaffCategory } from "./StaffCategories";

export enum FoodArea{
    ASEA,
    EUROPE,
    AFRIC,
    AMERIC
}

export class Chief extends Staff{
    private foodArea?:FoodArea;

    constructor(name: string, age: number, gender: Gender, staffCategory: StaffCategory){
        super(staffCategory, name, age, gender);
    }
    setFoodArea(foodArea: FoodArea){
        this.foodArea = foodArea;
    }
}