import { ApiModelProperty } from '@nestjs/swagger';

// @ApiModel({description: 'test'})
export class PersonneDTO {
  @ApiModelProperty()
  readonly personne_id: number;

  @ApiModelProperty()
  readonly nom: string;

  @ApiModelProperty()
  readonly prenom: string;
}