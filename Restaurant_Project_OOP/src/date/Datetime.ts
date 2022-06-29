export class Datetime {
    constructor(private day:number, private month:number,private year:number,private time:number){}

    isEqual(other: Datetime){
        return this.day==other.day && this.month==other.month && this.year==other.year && this.time==other.time;
    }
}