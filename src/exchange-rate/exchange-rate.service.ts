import { Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeRateService {
    getExchangeRate(base: string, target: string): Promise<number> {
        // As per requierement, this method should return the exchange rate:
        // 6. Exchange rate is 1 SCR = 1 EUR
        return Promise.resolve(1.00);
    }
}
