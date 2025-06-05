import { Injectable, Logger } from '@nestjs/common';
import { TransactionApiResponseDTO } from './dto/transaction-api.response';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TransactionApiService {
    private readonly logger = new Logger(TransactionApiService.name);

    constructor(
        private readonly configService: ConfigService, 
        private readonly httpService: HttpService) {
    }

    async fetchTransactions(
        userId: string,
        startDate: Date,
        endDate: Date)
    : Promise<TransactionApiResponseDTO | undefined> {
        try {
            const endpoint = this.configService.get<string>('TRANSACTION_API_ENDPOINT');
            const requestUrl = `${endpoint}/transactions?userId=${userId}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`;
            // TBD: Use API key: TRANSACTION_API_KEY
            const response = await this.httpService.get<TransactionApiResponseDTO>(requestUrl).toPromise();
            return response?.data;
        } catch (error) {
            this.logger.error('Error fetching transactions:', error);
            return undefined;
        }
    }
}
