
import { procedures } from "./procedures.json";

export class Procedure{

    /**
     * Function that associate a specific name and a value from the procedure.json file
     * @param procedures JSON file
     */
    private GetProcedure(procedures) {
        if(procedures.name === this[0]) {
            return procedures;
        }
    }

    /**
     * Return the SQL request from a specific name
     * @param name Name of the request to Get (or PROC_STOCK) in procedures.json file
     */
    public GetRequest(name: string) : string {
        var myVar = procedures.find(this.GetProcedure, [name]);
        return myVar.request;
    }
}

