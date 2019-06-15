import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiUseTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @ApiUseTags('AppDefault')
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
