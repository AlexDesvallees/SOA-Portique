import { ApiModelProperty } from "@nestjs/swagger";
import { UserDTO } from "../users/user.entity";
import { PortiqueDTO } from "../portique/portique.entity";

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
    readonly personne_id: UserDTO["personne_id"];

    @ApiModelProperty()
    readonly date_freq: Date;

    @ApiModelProperty()
    readonly nb_pers_freq: number;
}