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
    readonly numero_programme: number;

    @Column('date')
    @ApiModelProperty()
    readonly date_prog: Date;
}