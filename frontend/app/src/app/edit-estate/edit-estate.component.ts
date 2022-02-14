import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bus } from '../models/bus';
import { City } from '../models/city';
import { Estate } from '../models/estate';
import { Location } from '../models/location';
import { Municipality } from '../models/municipality';
import { EstateService } from '../services/estate.service';

@Component({
  selector: 'app-edit-estate',
  templateUrl: './edit-estate.component.html',
  styleUrls: ['./edit-estate.component.css']
})
export class EditEstateComponent implements OnInit {

  constructor(private estateService: EstateService, private router: Router) { }

  ngOnInit(): void {
    this.estate = JSON.parse(localStorage.getItem('estate'));

    this.estateService.getAllCities().subscribe((cities: City[]) => {
      this.allCities = cities;
    })

    this.estateService.getAllMunicipalities().subscribe((municipalities: Municipality[]) => {
      this.allMunicipalities = municipalities;
      
      this.selectedCityMunicipalities = municipalities.filter(m => m.city == this.estate.city);
    })

    this.estateService.getAllLocations().subscribe((locations: Location[]) => {
      this.allLocations = locations;
      
      this.selectedMunicipalityLocations = locations.filter(l => l.municipality == this.estate.municipality);
      this.selectedLocationStreets = this.selectedMunicipalityLocations.find(l => l.name == this.estate.location).streets;
    })

    this.estateService.getAllBuses().subscribe((buses: Bus[]) => {
      this.allBuses = buses; 

      this.selectedCityBuses = buses.find(b => b.city == this.form.value.grad).buses;
    })

    this.initForm();
  }

  @ViewChild('f') form: NgForm;
  estate: Estate;

  allCities: City[];
  allMunicipalities: Municipality[];
  allLocations: Location[];
  allBuses: Bus[] = [];

  selectedCityMunicipalities: Municipality[] = [];
  selectedMunicipalityLocations: Location[] = [];
  selectedLocationStreets: String[] = [];
  selectedCityBuses: Number[] = [];

  initForm() {
    setTimeout(() => {
      this.form.controls['ime'].setValue(this.estate.name);
      this.form.controls['tip'].setValue(this.estate.type);
      this.form.controls['grad'].setValue(this.estate.city);
      this.form.controls['opstina'].setValue(this.estate.municipality);
      this.form.controls['lokacija'].setValue(this.estate.location);
      this.form.controls['ulica'].setValue(this.estate.street);
      this.form.controls['kvadratura'].setValue(this.estate.area);
      this.form.controls['soba'].setValue(this.estate.rooms);
      this.form.controls['cena'].setValue(this.estate.price);
      this.form.controls['rezije'].setValue(this.estate.monthlyFee);
      this.form.controls['sprat'].setValue(this.estate.floor);
      this.form.controls['ukupno_spratova'].setValue(this.estate.totalFloors);
      this.form.controls['busevi'].setValue(this.estate.buses);
      this.form.controls['karakteristike'].setValue(this.estate.characteristics);
      this.form.controls['stanje'].setValue(this.estate.state);
      this.form.controls['godina_izgradnje'].setValue(this.estate.constructionYear);
      this.form.controls['grejanje'].setValue(this.estate.heating);
      this.form.controls['parking'].setValue(this.estate.parking);
      this.form.controls['opis'].setValue(this.estate.description);
    }, 0);
  }

  cityChange() {
    this.form.controls['opstina'].setValue('');
    this.selectedCityMunicipalities = this.allMunicipalities.filter(m => m.city == this.form.value.grad);
    this.municipalityChange();

    this.form.controls['busevi'].setValue([]);
    this.selectedCityBuses = this.allBuses.find(b => b.city == this.form.value.grad).buses;
  }

  municipalityChange() {
    this.form.controls['lokacija'].setValue('');
    this.selectedMunicipalityLocations = this.allLocations.filter(l => l.municipality == this.form.value.opstina);
  
    this.locationChange();
  }

  locationChange() {
    this.form.controls['ulica'].setValue('');
    let location = this.selectedMunicipalityLocations.find(l => l.name == this.form.value.lokacija);
    this.selectedLocationStreets = location ? location.streets : [];
  }

  editEstate() {
    this.estateService.editEstate(this.estate.id, this.form).subscribe((estate: Estate) => {
      localStorage.removeItem('estate');
      this.router.navigate(['advertiser']);
    })
  }
}
