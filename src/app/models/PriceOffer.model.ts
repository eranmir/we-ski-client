import {Hotel} from "./Hotel.model";

export class PriceOffer {
  hotel?: Hotel;
  startDate?: Date;
  endDate?: Date;
  priceInfo?: PriceInfo;
}

export class PriceInfo {
  amountBeforeTax?: number;
  amountAfterTax?: number;
  currency?: string;
}
