import { ApiModelProperty } from "@nestjs/swagger";

/**
 * DTO pour l'objet Portique
 */
export class PortiqueDTO {
    @ApiModelProperty()
    readonly portique_id: number;

    @ApiModelProperty()
    readonly operateur_id: number;

    @ApiModelProperty()
    readonly frequentation_id: number;

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
