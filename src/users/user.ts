import { ApiModelProperty } from '@nestjs/swagger';
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { CompteDTO } from 'dist/compte/compte';
import { StatusDTO } from 'dist/status/status';

/**
 * Documentation sur : https://github.com/typeorm/typeorm , https://docs.nestjs.com/techniques/database , https://github.com/typeorm/typeorm/blob/master/docs/multiple-connections.md , 
 */

@Entity()
export class PersonneDTO extends BaseEntity {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  readonly personne_id: number;

  @ApiModelProperty()
  @Column({ length: 50 })
  readonly status_id: StatusDTO["status_id"];

  @ApiModelProperty()
  @Column({ length: 50 })
  readonly compte_id: CompteDTO["compte_id"];

  @ApiModelProperty()
  @Column({ length: 50 })
  readonly nom: string;

  @ApiModelProperty()
  @Column({ length: 50 })
  readonly prenom: string;

  @ApiModelProperty()
  @Column({ length: 1 })
  readonly isBlocked: number; // Value in db = 0 || 1 pour false || true
}