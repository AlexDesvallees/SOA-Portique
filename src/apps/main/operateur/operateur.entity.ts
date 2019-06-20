import { ApiModelProperty } from "@nestjs/swagger";
import { ProgrammeDTO as Programme } from "../programme/programme.entity";
import { PanneDTO } from "../panne/panne.entity";
import { PortiqueDTO } from "src/portique/portique.entity";

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
