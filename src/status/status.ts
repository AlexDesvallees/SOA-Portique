import { ApiModelProperty } from "@nestjs/swagger";

/**
 * DTO pour l'objet Status
 */
export class StatusDTO {
    @ApiModelProperty()
    readonly status_id: number;

    @ApiModelProperty()
    readonly role: string;
}