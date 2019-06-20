import { ApiModelProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * DTO pour l'objet Programme
 */
@Entity()
export class ProgrammeDTO {

    @PrimaryGeneratedColumn()
    readonly programme_id: number;

    @ApiModelProperty()
    @Column('int')
    numero_programme: number;

    @ApiModelProperty()
    @Column({length : 50})
    date_prog: string;
}