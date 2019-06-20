import { ApiModelProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * DTO pour l'objet Compte
 */
@Entity()
export class CompteDTO {

    @PrimaryGeneratedColumn()
    readonly compte_id: number;

    @ApiModelProperty()
    @Column('int')
    solde: number;

    /**
     * Equivaut a la date de fin du contrat
     */
    @ApiModelProperty()
    @Column({length : 50})
    date_validite: string;
}