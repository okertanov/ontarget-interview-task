import { Module } from '@nestjs/common';
import { AggregationController } from './aggregation.controller';
import { AggregationService } from './aggregation.service';
import { ExchangeRateModule } from '../exchange-rate/exchange-rate.module';
import { TransactionApiModule } from '../transaction-api/transaction-api.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, ExchangeRateModule, TransactionApiModule],
  controllers: [AggregationController],
  providers: [AggregationService],
})
export class AggregationModule {}
