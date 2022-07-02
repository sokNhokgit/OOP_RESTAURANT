import { Table } from "./Table";
export class TableManagement {
    private tables:Table[] = [];

    getTable():Table[]{
        return this.tables;
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

  
}