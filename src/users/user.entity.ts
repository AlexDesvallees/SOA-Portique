import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';

/**
 * Documentation sur : https://github.com/typeorm/typeorm , https://docs.nestjs.com/techniques/database , https://github.com/typeorm/typeorm/blob/master/docs/multiple-connections.md , 
 */

@Entity()
export class UserDTO extends BaseEntity {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  personne_id: number;

  @ApiModelProperty()
  @Column('int')
  status_id: number;

  @ApiModelProperty()
  @Column('int')
  compte_id: number;

  @ApiModelProperty()
  @Column({ length: 50 })
  nom: string;

  @ApiModelProperty()
  @Column({ length: 50 })
  prenom: string;

  @ApiModelProperty()
  @Column()
  isBlocked: number; // Value in db = 0 || 1 pour false || true
}