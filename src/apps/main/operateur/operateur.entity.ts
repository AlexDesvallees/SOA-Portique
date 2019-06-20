import { ApiModelProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * DTO pour l'objet Operateur
 */
@Entity()
export class OperateurDTO {

    @PrimaryGeneratedColumn()
    readonly operateur_id: number;

    @ApiModelProperty()
    @Column({length : 50})
    nom: string;

    @ApiModelProperty()
    @Column({length : 50})
    prenom: string;
}
