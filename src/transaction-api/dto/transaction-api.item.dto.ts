export type TransactionApiItemType = 'payout' | 'spent';

export class TransactionApiItemDTO {
  id: string;
  userId: string;
  createdAt: Date;
  type: TransactionApiItemType;
  amount: number;

constructor(
    id: string,
    userId: string,
    createdAt: Date,
    type: TransactionApiItemType,
    amount: number,
    ) {
        this.id = id;
        this.userId = userId;
        this.createdAt = createdAt;
        this.type = type;
        this.amount = amount;
    }
}
