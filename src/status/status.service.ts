import { Injectable } from '@nestjs/common';
import { AppStatusDTO } from './app.status.dto';

//
// Alive Status Service TBD
//

@Injectable()
export class StatusService {
  getStatus(): AppStatusDTO {
    return new AppStatusDTO('OK', '1.0.0', Date.now(), new Date());
  }
}
