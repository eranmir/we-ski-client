import { Component, OnInit } from '@angular/core';
import {HotelApiService} from "../services/hotel-api.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  companyLogoSrc = 'https://res.cloudinary.com/ht4mr7djk/image/upload/f_auto,q_auto/weski_logo.png';
  siteLocation: string = '';
  selectedFromDate: Date | undefined;
  selectedToDate: Date | undefined;
  selectedDestination: number;
  groupSize: number;
  groupSizeOptions = Array.from({ length: 10 }, (_, i) => i + 1);
  destinations = [
    { id: 1, name: 'Val Thorens' },
    { id: 2, name: 'Courchevel' },
    { id: 3, name: 'Tignes' },
    { id: 4, name: 'La Plagne' },
    { id: 5, name: 'Chamonix' },
    { id: 6, name: 'Les Menuires' },
    { id: 7, name: "L'alpes D'huez" },
    { id: 8, name: 'Les Deux Alpes' }
  ];

  constructor(private hotelApiService: HotelApiService) {
    this.groupSize = 1;
    this.selectedDestination = 1;
  }

  openDatePicker() {
    // Code to open date picker and handle date selection
    // Assign selected dates to `selectedDates` property
  }

  async search() {
    console.log('ere')
    const priceOffers = await this.hotelApiService.getPriceOffers(this.selectedFromDate, this.selectedToDate, this.groupSize, this.selectedDestination)
    // Code to perform search based on the selected search criteria
    // You can access the values of `location`, `numOfPeople`, and `selectedDates` properties
  }
}
