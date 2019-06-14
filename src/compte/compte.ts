import { ApiModelProperty } from "@nestjs/swagger";

/**
 * DTO pour l'objet Compte
 */
export class CompteDTO {
    @ApiModelProperty()
    readonly compte_id: number;

    @ApiModelProperty()
    readonly solde: number;

    /**
     * Equivaut a la date de fin du contrat
     */
    @ApiModelProperty()
    readonly date_validite: Date;
}