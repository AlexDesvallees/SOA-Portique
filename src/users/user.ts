import { ApiModelProperty } from '@nestjs/swagger';

// @ApiModel({description: 'test'})
export class UserDTO {
  @ApiModelProperty()
  readonly userId: number;

  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly surname: string;
}