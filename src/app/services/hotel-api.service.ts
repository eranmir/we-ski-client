import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {StateService} from "./state.service";
import {PriceOffer} from "../models/PriceOffer.model";

@Injectable({
  providedIn: 'root'
})
export class HotelApiService {
  constructor(private http: HttpClient,
              private stateService: StateService) { }

  async getPriceOffers(fromDate: Date | undefined, toDate: Date | undefined, groupSize: number, skiSite: number) {
    let priceOffers: PriceOffer[] = await lastValueFrom(this.http.post('http://localhost:3000/priceOffer/getPriceOffers', {
      fromDate: fromDate,
      toDate: toDate,
      groupSize: groupSize,
      skiSite: skiSite
    })) as PriceOffer[];

    this.stateService.priceOffer = priceOffers;
    console.log(priceOffers);
  }
}
