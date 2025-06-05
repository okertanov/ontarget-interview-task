import { Injectable } from '@nestjs/common';
import { DiscoveryDTO } from './discovery.dto';

@Injectable()
export class AppService {
  getDiscovery(): DiscoveryDTO {
    return new DiscoveryDTO();
  }
}
