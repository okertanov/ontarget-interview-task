import { Controller, Get } from '@nestjs/common';
import { AppStatusDTO } from './app.status.dto';
import { StatusService } from './status.service';

//
// Alive Status Controller TBD
//

@Controller('/status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  getDiscovery(): AppStatusDTO {
    return this.statusService.getStatus();
  }
}