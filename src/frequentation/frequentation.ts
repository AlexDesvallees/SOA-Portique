import { ApiModelProperty } from "@nestjs/swagger";

/**
 * DTO pour l'objet Frequentation
 */
export class FrequentationDTO {
    @ApiModelProperty()
    readonly frequentation_id: number;

    @ApiModelProperty()
    readonly personne_id: number;

    @ApiModelProperty()
    readonly date_freq: Date;

    @ApiModelProperty()
    readonly nb_pers_freq: number;
}