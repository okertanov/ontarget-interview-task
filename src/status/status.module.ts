import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';

//
// Alive Status Module TBD
//

@Module({
  imports: [],
  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}