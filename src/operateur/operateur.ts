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

    @ApiModelProperty()
    readonly programme_id: number;

    @ApiModelProperty()
    readonly panne_id: number;

    @ApiModelProperty()
    readonly adresse: string;

    @ApiModelProperty()
    readonly ville: string;

    @ApiModelProperty()
    readonly code_postal: number;

    // Alex - Pour ce champs, je ne sais plus pourquoi on l'avait inclu dans le MCD
    @ApiModelProperty()
    readonly alarme: string;
}
