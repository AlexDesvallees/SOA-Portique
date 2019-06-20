import { ApiModelProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * DTO pour l'objet ProgrammePortique
 * Cet Objet représente la table de liaison L_Programme_Portique
 */
@Entity()
export class ProgrammePortiqueDTO {

    @PrimaryGeneratedColumn()
    readonly programme_portique_id: number;

    @ApiModelProperty()
    @Column('int')
    programme_id: number;

    @ApiModelProperty()
    @Column('int')
    portique_id: number;
}