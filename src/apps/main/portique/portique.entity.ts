import { ApiModelProperty } from "@nestjs/swagger";
import { OperateurDTO as Operateur } from "../operateur/operateur.entity";
import { PrimaryGeneratedColumn } from "typeorm";

/**
 * DTO pour l'objet Portique
 */
export class PortiqueDTO {

    @PrimaryGeneratedColumn()
    @ApiModelProperty()
    readonly portique_id: number;

    @ApiModelProperty()
    readonly operateur_id: Operateur["operateur_id"];

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
