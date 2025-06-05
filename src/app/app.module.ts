import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusModule } from '../status/status.module';
import { AuthModule } from '../auth/auth.module';
import { TransactionApiModule } from '../transaction-api/transaction-api.module';
import { ExchangeRateModule } from '../exchange-rate/exchange-rate.module';
import { HttpModule } from '@nestjs/axios';
import { AggregationModule } from '../aggregation/aggregation.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(
      {
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          type: 'sqlite',
          database: configService.get('DATABASE_URL'),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
        }),
        inject: [ConfigService],
      },
    ),
    StatusModule,
    AuthModule,
    ExchangeRateModule,
    TransactionApiModule,
    AggregationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
