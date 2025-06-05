import { Controller, Get, Param } from '@nestjs/common';
import { AggregationService } from './aggregation.service';
import { AggregatedDataDTO } from './dto/aggregated.data.dto';
import { AggregatedPayoutDTO } from './dto/aggregated.payout.dto';

@Controller('aggregation')
export class AggregationController {
    constructor(private readonly aggregationService: AggregationService) {
    }

    @Get(':userId')
    getAggregatedData(@Param('userId') userId: string): Promise<AggregatedDataDTO> {
            return this.aggregationService.getAggregatedData(userId);
    }

    getRequestedPayoutsList(@Param('userId') userId: string): Promise<AggregatedPayoutDTO[]> {
        return this.aggregationService.getRequestedPayoutsList(userId);
    }
}
