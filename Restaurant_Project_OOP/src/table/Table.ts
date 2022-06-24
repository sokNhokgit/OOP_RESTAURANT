import { Chair } from "./Chair";
import { Status } from "./Status";

export class Table {
    private chairs:Chair[]=[];

    constructor(private tableid:number,private tablestatus:Status){}

    addChair(chair:Chair){
        this.chairs.push(chair);
    }

    getChair():Chair[]{
        return this.chairs;
    }

    istablefree(){
        let chairs = this.chairs;
        let chairfree = true;
        if (chairs.length>0){
            chairfree = false;
        }
        return chairfree;
    }
}