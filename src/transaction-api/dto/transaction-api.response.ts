import { TransactionApiItemDTO } from "./transaction-api.item.dto";
import { TransactionApiMetaDTO } from "./transaction-api.meta.dto";

export class TransactionApiResponseDTO {
    items: TransactionApiItemDTO[];
    meta: TransactionApiMetaDTO;
}
