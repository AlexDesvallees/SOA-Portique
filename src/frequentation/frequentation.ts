import { ApiModelProperty } from "@nestjs/swagger";
import { PersonneDTO } from "../users/user";
import { PortiqueDTO } from "../portique/portique";

/**
 * WARNING - A revoir avec table de fait etc...
 * DTO pour l'objet Frequentation
 */
export class FrequentationDTO {
    @ApiModelProperty()
    readonly frequentation_id: number;

    @ApiModelProperty()
    readonly portique_id: PortiqueDTO["portique_id"];

    @ApiModelProperty()
    readonly personne_id: PersonneDTO["personne_id"];

    @ApiModelProperty()
    readonly date_freq: Date;

    @ApiModelProperty()
    readonly nb_pers_freq: number;
}