import { Table } from "./Table";
export class TableManagement {
    private tables:Table[] = [];

    getTable():Table[]{
        return this.tables;
    }

    addTable(table:Table){
        this.tables.push(table);
    }

    tablefree():Table | undefined{
        let tables = this.tables;
        for (let i=0;i<tables.length;i++){
            if (tables[i].istableFree()){
                return tables[i];
            }
        }
        return undefined;
    }

    getTableByChair(chair: number){
        let tables = this.tables;
        let tablesFree = [];
        for (let i=0;i<tables.length;i++){
            if (tables[i].istableFree()){
                tablesFree.push(tables[i]);
                if(tablesFree[i].isChairNumber(chair)){
                    return tablesFree[i];
                }
            }
        }
        return undefined;        
    }
}