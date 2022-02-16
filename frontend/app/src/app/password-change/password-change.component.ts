import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { EstateService } from '../services/estate.service';
import { Agency } from '../models/agency';
import { Estate } from '../models/estate';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  constructor(private userService: UserService, private router: Router, private estateService: EstateService) { }

  ngOnInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));

    this.estateService.getAllAgencies().subscribe((agencies: Agency[]) => {
      this.agencies = agencies;
    })

    this.estateService.getAllEstates().subscribe((estates: Estate[]) => {
      this.estates = estates;
    })
  }

  agencies: Agency[] = [];
  estates: Estate[] = [];
  loggedUser: User;
  password_message: string = "";
  message: string = "";

  getAgency() {
    return this.loggedUser.agency != '' ? this.loggedUser.agency : "Niste oglasivac";
  }

  passwordsMatch() {
    return this.form.value.nova_lozinka == this.form.value.potvrda_lozinke;
  }

  passwordPatternOk() {
    return /(?=.*\d)(?=.*[a-z])(?=.*\W)(?=.*[A-Z]).{8,}/.test(this.form.value.nova_lozinka) && /^[a-zA-Z]/.test(this.form.value.nova_lozinka);
  }

  submit() {
    if (this.loggedUser.password != this.form.value.stara_lozinka) this.password_message = "Stara lozinka nije dobra!";
    else if (!this.passwordPatternOk()) this.password_message = "Lozinka mora pocinjati slovom, imati najmanje 8 karaktera i sadrzati makar po 1 veliko slovo, specijalni karakter i broj.";
    else if (!this.passwordsMatch()) this.password_message = "Lozinke se ne poklapaju!";
    else {
      this.userService.changePassword(this.loggedUser.username, this.form.value.nova_lozinka).subscribe((user: User) => {
        localStorage.removeItem('user');
        this.router.navigate(['login']);
      })
    }
  }

  edit() {
    this.userService.editAdvertiserInfo(this.loggedUser.username, this.loggedUser.email, this.loggedUser.phone, this.loggedUser.agency).subscribe((user: User) => {
      localStorage.setItem('user', JSON.stringify(this.loggedUser));
      this.message = "Izmenjeno!";
    })
  }

  getEstateName(estateId: number) {
    if (this.estates.length == 0) return '';
    return this.estates.find(e => e.id == estateId).name;
  }

  removeFromFavourites(estateId: number) {
    this.userService.deleteFromFavourites(this.loggedUser.username, estateId).subscribe((user: User) => {
      this.loggedUser.favourites.splice(this.loggedUser.favourites.indexOf(estateId), 1);
      localStorage.setItem('user', JSON.stringify(this.loggedUser));
    })
  }
}
