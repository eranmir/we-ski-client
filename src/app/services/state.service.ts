import { Injectable } from '@angular/core';
import {PriceOffer} from "../models/PriceOffer.model";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  priceOffer: PriceOffer[];
  constructor() {
    this.priceOffer = [];
  }
}
