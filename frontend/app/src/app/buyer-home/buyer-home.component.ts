import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../models/city';
import { Estate } from '../models/estate';
import { Location } from '../models/location';
import { Municipality } from '../models/municipality';
import { EstateService } from '../services/estate.service';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css']
})
export class BuyerHomeComponent implements OnInit {

  constructor(private estateService: EstateService, private router: Router) { }

  ngOnInit(): void {
    this.estateService.getAllCities().subscribe((cities: City[]) => {
      this.allCities = cities;
    })

    this.estateService.getAllMunicipalities().subscribe((municipalities: Municipality[]) => {
      this.allMunicipalities = municipalities;
    })

    this.estateService.getAllLocations().subscribe((locations: Location[]) => {
      this.allLocations = locations;
    })

    this.estateService.getAllEstates().subscribe((estates: Estate[]) => {
      this.allEstates = estates.filter(e => e.sold == 0);
      this.filteredEstates = this.allEstates.filter(e => e.type == this.type);
    })
  }

  allCities: City[];
  allMunicipalities: Municipality[];
  allLocations: Location[];
  allEstates: Estate[] = [];

  selectedCityMunicipalities: Municipality[] = [];
  selectedMunicipalityLocations: Location[] = [];
  filteredEstates: Estate[] = [];

  type: string = "stan";
  price: number;
  area: number;
  rooms: number = 1;
  city: string = '';
  municipality: string = '';
  location: string = '';

  getAverageSquarePrice(estate: Estate) {
    let estates = this.allEstates.filter(e => 
      e.type == estate.type && e.city == estate.city && e.municipality == estate.municipality && e.location == estate.location
    );

    const sum = estates.reduce((a, b) => a + b.price / b.area, 0);
    return Math.round(sum / estates.length);
  }

  getMinRooms(rooms: string) {
    if (rooms == '5+') return 5;
    else return +rooms;
  }

  change() {
    // Type
    this.filteredEstates = this.allEstates.filter(e => e.type == this.type);

    // Price
    if (this.price != null) this.filteredEstates = this.filteredEstates.filter(e => e.price <= this.price);

    // Area
    if (this.area != null) this.filteredEstates = this.filteredEstates.filter(e => e.area >= this.area);

    // Rooms
    if (this.rooms != null) this.filteredEstates = this.filteredEstates.filter(e => this.getMinRooms(e.rooms) >= this.rooms);
  }

  cityChange() {
    this.change();

    // City
    if (this.city != '') {
      this.filteredEstates = this.filteredEstates.filter(e => e.city == this.city);
      this.selectedCityMunicipalities = this.allMunicipalities.filter(m => m.city == this.city);
    } else {
      this.selectedCityMunicipalities = [];
      this.selectedMunicipalityLocations = [];
    }

    this.municipality = '';
  }

  municipalityChange() {
    this.change();

    // City
    if (this.city != '') this.filteredEstates = this.filteredEstates.filter(e => e.city == this.city);

    // Municipality
    if (this.municipality != '') {
      this.filteredEstates = this.filteredEstates.filter(e => e.municipality == this.municipality);
      this.selectedMunicipalityLocations = this.allLocations.filter(l => l.municipality == this.municipality);
    } else {
      this.selectedMunicipalityLocations = [];
    }

    this.location = '';
  }

  locationChange() {
    this.change();

    // City
    if (this.city != '') this.filteredEstates = this.filteredEstates.filter(e => e.city == this.city);

    // Municipality
    if (this.municipality != '') this.filteredEstates = this.filteredEstates.filter(e => e.municipality == this.municipality);

    // Location
    if (this.location != '') this.filteredEstates = this.filteredEstates.filter(e => e.location == this.location);
  }

  details(estate: Estate) {
    localStorage.setItem('estate', JSON.stringify(estate));
    this.router.navigate(['estateDetails']);
  }
}
