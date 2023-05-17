import {Component, OnInit} from '@angular/core';
import {StateService} from "./services/state.service";
import {PriceOffer} from "./models/PriceOffer.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public stateService: StateService) {}
  title = 'weski-client';

  ngOnInit(): void {
    this.stateService.priceOffer;
  }
}
