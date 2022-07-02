import { Table } from "./Table";
export class TableManagement {
    private tables:Table[] = [];

    getTable():Table[]{
        return this.tables;
    }

    countAllTable(): number{
        return this.tables.length;
    }

    addTable(table:Table){
        this.tables.push(table);
    }

    findfreeTable():Table[] | undefined{
        let tables = this.tables;
        let freetable = [];
        for (let i=0;i<tables.length;i++){
            if (tables[i].istableFree()){
                freetable.push(tables[i])
            }
        }
        if (freetable.length !==0 ){
            return freetable;
        }
        return undefined;
    }

    findAllFreeTable():Table[] | undefined{
        let tables = this.tables;
        let tableFree = []
        for (let i=0;i<tables.length;i++){
            if (tables[i].istableFree()){
                tableFree.push(tables[i]);
            }
        }
        if(tableFree.length>0){
            return tableFree;
        }
        return undefined;
    }

    getAllTableByChair(chair: number):Table[] | undefined{
        let Tables = [];
        for(let table of this.tables){
            if(table.isChairEqual(chair)){
                Tables.push(table);
            }
        }
        if(Tables.length>0){
            return Tables;
        }else{
            return undefined;
        }
    }

    countAllTableByChair(chair: number):number | undefined{
        let Tables = [];
        for(let table of this.tables){
            if(table.isChairEqual(chair)){
                Tables.push(table);
            }
        }
        if(Tables.length>0){
            return Tables.length;
        }else{
            return undefined;
        }
    }
}