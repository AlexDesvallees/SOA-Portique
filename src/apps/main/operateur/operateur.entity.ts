import { ApiModelProperty } from "@nestjs/swagger";

/**
 * DTO pour l'objet Operateur
 */
export class OperateurDTO {
    @ApiModelProperty()
    readonly operateur_id: number;

    @ApiModelProperty()
    readonly nom: string;

    @ApiModelProperty()
    readonly prenom: string;
}
