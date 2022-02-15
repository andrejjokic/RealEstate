import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Agency } from '../models/agency';
import { Bus } from '../models/bus';
import { City } from '../models/city';
import { Estate } from '../models/estate';
import { Location } from '../models/location';
import { Municipality } from '../models/municipality';
import { User } from '../models/user';
import { EstateService } from '../services/estate.service';

@Component({
  selector: 'app-add-estate',
  templateUrl: './add-estate.component.html',
  styleUrls: ['./add-estate.component.css']
})
export class AddEstateComponent implements OnInit {

  constructor(private estateService: EstateService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.estateService.getAllCities().subscribe((cities: City[]) => {
      this.allCities = cities;
    })

    this.estateService.getAllMunicipalities().subscribe((municipalities: Municipality[]) => {
      this.allMunicipalities = municipalities;
    })

    this.estateService.getAllLocations().subscribe((locations: Location[]) => {
      this.allLocations = locations;
    })

    this.estateService.getAllBuses().subscribe((buses: Bus[]) => {
      this.allBuses = buses;  
    })

    this.estateService.getAllAgencies().subscribe((agencies: Agency[]) => {
      this.agency = agencies.find(a => a.name == this.user.agency);
    })
  }

  @ViewChild('f') form: NgForm;
  user: User;
  agency: Agency;

  allCities: City[];
  allMunicipalities: Municipality[];
  allLocations: Location[];
  allBuses: Bus[] = [];

  selectedCityMunicipalities: Municipality[] = [];
  selectedMunicipalityLocations: Location[] = [];
  selectedLocationStreets: String[] = [];
  selectedCityBuses: Number[] = [];

  images: String[] = [];
  imagesOk: boolean = false;
  image_message: string = '';

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

  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      this.imagesOk = true;
      this.image_message = '';

      if (event.target.files.length < 3 || event.target.files.length > 6) {
        this.imagesOk = false;
        this.image_message = "Izaberite 3-6 slika nekretnine!"
        return;
      }
      
      for (let i = 0; i < event.target.files.length; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.images.push(event.target.result);
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  addEstate() {
    let data = {
      name: this.form.value.ime,
      type: this.form.value.tip,
      city: this.form.value.grad,
      municipality: this.form.value.opstina,
      location: this.form.value.lokacija,
      street: this.form.value.ulica,
      price: this.form.value.cena,
      area: this.form.value.kvadratura,
      rooms: this.form.value.soba,
      floor: this.form.value.sprat,
      totalFloors: this.form.value.ukupno_spratova,
      description: this.form.value.opis,
      constructionYear: this.form.value.godina_izgradnje,
      state: this.form.value.stanje,
      heating: this.form.value.grejanje,
      parking: this.form.value.parking,
      characteristics: this.form.value.karakteristike,
      monthlyFee: this.form.value.rezije,
      images: this.images,
      buses: this.form.value.busevi,
      sold: 0,
      lastModified: new Date().toLocaleString(),
      advertiserFirstname: this.user.firstname,
      advertiserLastname: this.user.lastname,
      advertiserPhone: this.user.phone,
      advertiserLicense: this.user.license,
      agencyName: this.user.agency,
      agencyPIB: this.agency ? this.agency.pib : '',
      agencyCity: this.agency ? this.agency.city : '',
      agencyAddress: this.agency ? this.agency.address : '',
      agencyPhone: this.agency ? this.agency.phone : ''
    }

    this.estateService.addEstate(data).subscribe((estate: Estate) => {
      this.form.reset();
      this.router.navigate(['advertiser']);
    })
  }
}
