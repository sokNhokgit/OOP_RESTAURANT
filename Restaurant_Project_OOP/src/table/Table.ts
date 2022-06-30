import { Insideorder } from "../Order.ts/Orderinside";
import { Tablestatus } from "./Tablestatus";

export class Table {
  
    private ordered?:Insideorder=undefined;
    constructor(private tableid:number,private chairnumber:number,private tablestatus:Tablestatus){}

    setOrder(order:Insideorder){
        this.ordered = order;
    }

    isChairEqual(other:number):boolean{
        return this.chairnumber == other;
    }

    istableFree():boolean{
        let isfree = true;
        if (this.ordered !== undefined){
            isfree = false;
        }
        return isfree;
    }

    isIdEqual(other: number){
        return this.tableid == other;
    }

    customerLeft(){
        this.ordered = undefined;
        return "table id number "+this.tableid + " is free now";
    }
    
}