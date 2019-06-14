import { ApiModelProperty } from "@nestjs/swagger";

/**
 * DTO pour l'objet Programme
 */
export class ProgrammeDTO {
    @ApiModelProperty()
    readonly programme_id: number;

    @ApiModelProperty()
    readonly numero_programme: number;

    @ApiModelProperty()
    readonly date_prog: Date;
}