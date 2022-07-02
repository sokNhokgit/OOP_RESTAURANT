import { Gender } from "../Gender";
import { Staff } from "./Staff";
import { StaffCategory } from "./StaffCategories";

export enum FoodArea{
    ASEA,
    EUROPE,
    AFRIC,
    AMERIC
}

export class Chef extends Staff{
    private foodArea?:FoodArea;

    constructor(name: string, age: number, gender: Gender,phoneNumber:number){
        super( name, age, gender, phoneNumber, StaffCategory.CHEF);
    }
    setFoodArea(foodArea: FoodArea){
        this.foodArea = foodArea;
    }
}