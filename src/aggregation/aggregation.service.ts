import { Injectable, Optional } from '@nestjs/common';
import { AggregatedDataDTO } from './dto/aggregated.data.dto';
import { AggregatedPayoutDTO } from './dto/aggregated.payout.dto';
import { ExchangeRateService } from '../exchange-rate/exchange-rate.service';
import { TransactionApiService } from '../transaction-api/transaction-api.service';

@Injectable()
export class AggregationService {
    constructor(
        @Optional() private readonly exchangeRateService: ExchangeRateService,
        @Optional() private readonly transactionApiService: TransactionApiService,
    ) {
    }

    async getAggregatedData(userId: string): Promise<AggregatedDataDTO> {
        return {
            userId: userId,
            balance: 0,
            earned: 0,
            spent: 0,
            payout: 0,
            paidOut: false,
            timestamp: new Date(),
        };
    }

    async getRequestedPayoutsList(userId: string): Promise<AggregatedPayoutDTO[]> {
        return [
            {
                userId: userId,
                amount: 0,
                status: 'PENDING',
                timestamp: new Date(),
            },
        ];
    }
}
