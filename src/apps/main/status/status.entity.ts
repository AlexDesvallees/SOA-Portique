import { ApiModelProperty } from "@nestjs/swagger";
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

/**
 * DTO pour l'objet Status
 */
@Entity()
export class StatusDTO {
    
    @PrimaryGeneratedColumn()
    readonly status_id: number;

    @ApiModelProperty()
    @Column({ length: 50 })
    readonly role: string;
}