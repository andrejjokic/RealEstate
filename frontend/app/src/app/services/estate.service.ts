import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Estate } from '../models/estate';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000/estates';

  getAllCities() {
    return this.http.get(`${this.uri}/getAllCities`)
  }

  getAllMunicipalities() {
    return this.http.get(`${this.uri}/getAllMunicipalities`)
  }

  getAllLocations() {
    return this.http.get(`${this.uri}/getAllLocations`)
  }

  getAllBuses() {
    return this.http.get(`${this.uri}/getAllBuses`)
  }

  addEstate(data) {
    return this.http.post(`${this.uri}/addEstate`, data);
  }

  getAllEstates() {
    return this.http.get(`${this.uri}/getAllEstates`)
  }

  sellEstate(id: number) {
    return this.http.post(`${this.uri}/sellEstate`, {'id': id});
  }

  editEstate(id: number, form: NgForm) {
    let payload = {
      id: id,
      name: form.value.ime,
      type: form.value.tip,
      city: form.value.grad,
      municipality: form.value.opstina,
      location: form.value.lokacija,
      street: form.value.ulica,
      price: form.value.cena,
      area: form.value.kvadratura,
      rooms: form.value.soba,
      floor: form.value.sprat,
      totalFloors: form.value.ukupno_spratova,
      description: form.value.opis,
      constructionYear: form.value.godina_izgradnje,
      state: form.value.stanje,
      heating: form.value.grejanje,
      parking: form.value.parking,
      characteristics: form.value.karakteristike,
      monthlyFee: form.value.rezije,
      buses: form.value.busevi,
      lastModified: new Date().toLocaleString()
    }

    return this.http.post(`${this.uri}/editEstate`, payload);
  }

  getAllAgencies() {
    return this.http.get(`${this.uri}/getAllAgencies`)
  }

}
