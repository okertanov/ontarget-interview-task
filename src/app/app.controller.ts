import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DiscoveryDTO } from './discovery.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDiscovery(): DiscoveryDTO {
    return this.appService.getDiscovery();
  }
}
