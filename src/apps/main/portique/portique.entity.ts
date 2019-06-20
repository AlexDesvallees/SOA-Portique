import { ApiModelProperty } from "@nestjs/swagger";
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

/**
 * DTO pour l'objet Portique
 */
@Entity()
export class PortiqueDTO {

    @PrimaryGeneratedColumn()
    readonly portique_id: number;

    @ApiModelProperty()
    @Column('int')
    operateur_id: number;

    @ApiModelProperty()
    @Column({ length: 50 })
    adresse: string;

    @ApiModelProperty()
    @Column({ length: 50 })
    ville: string;

    @ApiModelProperty()
    @Column('int')
    code_postal: number;

    // Alex - Pour ce champs, je ne sais plus pourquoi on l'avait inclu dans le MCD
    @ApiModelProperty()
    @Column({ length: 50 })
    alarme: string;
}
