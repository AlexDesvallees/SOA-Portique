import { ApiModelProperty } from "@nestjs/swagger";
import { PortiqueDTO } from "src/portique/portique";

/**
 * DTO pour l'objet Panne
 */
export class PanneDTO {
    @ApiModelProperty()
    readonly panne_id: number;

    @ApiModelProperty()
    readonly portique_id: PortiqueDTO["portique_id"];

    @ApiModelProperty()
    readonly type_panne: string;

    @ApiModelProperty()
    readonly date_panne: Date;
}
