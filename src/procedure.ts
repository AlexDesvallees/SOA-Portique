
import { procedures } from "./procedures.json";

export class Procedure{

    private GetProcedure(procedures) {
        if(procedures.name === this[0]) {
            return procedures;
        }
    }

    public GetRequest(name: string) : string {
        var myVar = procedures.find(this.GetProcedure, [name]);
        return myVar.request;
    }
}

