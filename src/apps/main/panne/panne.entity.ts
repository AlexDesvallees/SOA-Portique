import { ApiModelProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * DTO pour l'objet Panne
 */
@Entity()
export class PanneDTO {

    @PrimaryGeneratedColumn()
    readonly panne_id: number;

    @ApiModelProperty()
    @Column('int')
    portique_id: number;

    @ApiModelProperty()
    @Column({length : 50})
    type_panne: string;

    @ApiModelProperty()
    @Column({length : 50})
    date_panne: string;
}
