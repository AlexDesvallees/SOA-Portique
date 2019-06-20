import { ApiModelProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * WARNING - A revoir avec table de fait etc...
 * DTO pour l'objet Frequentation
 */
@Entity()
export class FrequentationDTO {

    @PrimaryGeneratedColumn()
    readonly frequentation_id: number;

    @ApiModelProperty()
    @Column('int')
    portique_id: number;

    @ApiModelProperty()
    @Column('int')
    personne_id: number;

    @ApiModelProperty()
    @Column({length : 50})
    date_freq: string;

    @ApiModelProperty()
    @Column('int')
    nb_pers_freq: number;
}