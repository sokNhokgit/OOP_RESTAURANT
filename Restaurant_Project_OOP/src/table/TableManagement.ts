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
}