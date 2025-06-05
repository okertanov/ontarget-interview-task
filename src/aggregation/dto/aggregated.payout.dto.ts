export type AggregatedPayoutStatus = 'PENDING' | 'COMPLETED' | 'FAILED';

export class AggregatedPayoutDTO {
    userId: string;
    amount: number;
    status: AggregatedPayoutStatus;
    timestamp: Date;
}
