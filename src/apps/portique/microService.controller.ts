import { Controller, Get } from '@nestjs/common';
import { MicroServiceService } from './microService.service';
import { ApiUseTags } from '@nestjs/swagger';

@Controller()
export class MicroServiceController {
  constructor(private readonly microServiceService: MicroServiceService) {}

}