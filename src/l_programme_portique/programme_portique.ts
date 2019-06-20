import { ApiModelProperty } from "@nestjs/swagger";
import { ProgrammeDTO } from "src/programme/programme.entity";
import { PortiqueDTO } from "src/portique/portique";

/**
 * DTO pour l'objet ProgrammePortique
 * Cet Objet représente la table de liaison L_Programme_Portique
 */
export class ProgrammePortiqueDTO {
    @ApiModelProperty()
    readonly programme_portique_id: number;

    @ApiModelProperty()
    readonly programme_id: ProgrammeDTO["programme_id"];

    @ApiModelProperty()
    readonly portique_id: PortiqueDTO["portique_id"];
}