import { Controller } from '@nestjs/common';
import { MicroServiceService } from './microService.service';

@Controller()
export class MicroServiceController {
  constructor(private readonly microServiceService: MicroServiceService) {}

}