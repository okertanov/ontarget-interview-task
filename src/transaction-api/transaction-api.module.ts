import { Module } from '@nestjs/common';
import { TransactionApiController } from './transaction-api.controller';
import { TransactionApiService } from './transaction-api.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [TransactionApiController],
  providers: [TransactionApiService],
  exports: [TransactionApiService],
})
export class TransactionApiModule {}
