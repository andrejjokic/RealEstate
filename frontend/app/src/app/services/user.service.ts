import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000/users';

  getUserByUsername(username: String) {
    return this.http.post(`${this.uri}/getUserByUsername`, {'username': username});
  }

  getUserByEmail(email: String) {
    return this.http.post(`${this.uri}/getUserByEmail`, {'email': email});
  }

  register(signupForm) {
    let payload = {
      firstname: signupForm.value.ime,
      lastname: signupForm.value.prezime,
      username: signupForm.value.korime,
      email: signupForm.value.email,
      password: signupForm.value.lozinka,
      city: signupForm.value.grad,
      birthday: signupForm.value.datum_rodjenja,
      imageFile: signupForm.value.imageFile,
      phone: signupForm.value.telefon,
      agency: signupForm.value.agencija,
      license: signupForm.value.agencija == '' ? '' : signupForm.value.licenca,
      type: signupForm.value.agencija == '' ? 'buyer' : 'advertiser',
      state: "new",
      favourites: []
    }

    return this.http.post(`${this.uri}/register`, payload);
  }

  changePassword(username: string, password: string) {
    let payload = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/changePassword`, payload);
  }

  editAdvertiserInfo(username: string, email: string, phone: string, agency: string) {
    let payload = {
      username: username,
      email: email,
      phone: phone,
      agency: agency
    }

    return this.http.post(`${this.uri}/editAdvertiserInfo`, payload);
  }

  addToFavourites(username: string, estate: number) {
    let payload = {
      username: username,
      estate: estate
    }
    return this.http.post(`${this.uri}/addToFavourites`, payload);
  }

  deleteFromFavourites(username: string, estate: number) {
    let payload = {
      username: username,
      estate: estate
    }
    return this.http.post(`${this.uri}/deleteFromFavourites`, payload);
  }
}
