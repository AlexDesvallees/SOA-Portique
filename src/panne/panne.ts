import { ApiModelProperty } from "@nestjs/swagger";

/**
 * DTO pour l'objet Panne
 */
export class PanneDTO {
    @ApiModelProperty()
    readonly panne_id: number;

    @ApiModelProperty()
    readonly type_panne: string;

    @ApiModelProperty()
    readonly date_panne: Date;
}
