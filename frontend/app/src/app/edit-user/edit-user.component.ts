import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Agency } from '../models/agency';
import { User } from '../models/user';
import { EstateService } from '../services/estate.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private estateService: EstateService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userForEdit'));
    this.prevUsername = this.user.username;

    this.estateService.getAllAgencies().subscribe((agencies: Agency[]) => {
      this.agencies = agencies;
    })

    this.initForm();
  }

  @ViewChild('f') signupForm: NgForm;

  user: User;

  prevUsername: string;
  agencies: Agency[];

  initForm() {
    setTimeout(() => {
      this.signupForm.controls['ime'].setValue(this.user.firstname);
      this.signupForm.controls['prezime'].setValue(this.user.lastname);
      this.signupForm.controls['korime'].setValue(this.user.username);
      this.signupForm.controls['email'].setValue(this.user.email);
      this.signupForm.controls['lozinka'].setValue(this.user.password);
      this.signupForm.controls['potvrda_lozinke'].setValue(this.user.password);
      this.signupForm.controls['grad'].setValue(this.user.city);
      this.signupForm.controls['datum_rodjenja'].setValue(this.user.birthday);
      this.signupForm.controls['telefon'].setValue(this.user.phone);
      this.signupForm.controls['agencija'].setValue(this.user.agency);
      this.signupForm.controls['licenca'].setValue(this.user.license);
    }, 0);
  }

  password_message: string = "";
  register_message: string = "";
  
  passwordsMatch() {
    return this.signupForm.value.lozinka == this.signupForm.value.potvrda_lozinke;
  }

  passwordPatternOk() {
    return /(?=.*\d)(?=.*[a-z])(?=.*\W)(?=.*[A-Z]).{8,}/.test(this.signupForm.value.lozinka) && /^[a-zA-Z]/.test(this.signupForm.value.lozinka);
  }

  passwordOk() {
    return this.passwordsMatch() && this.passwordPatternOk();
  }

  passwordChange() {
    if (!this.passwordPatternOk()) {
      this.password_message = "Lozinka mora pocinjati slovom, imati najmanje 8 karaktera i sadrzati makar po 1 veliko slovo, specijalni karakter i broj.";
      return;
    }

    if (!this.passwordsMatch()) this.password_message = "Lozinke se ne poklapaju!";
    else this.password_message = "";
  }

  edit() {
    this.userService.editUser(this.prevUsername, this.signupForm).subscribe(user => {
      localStorage.removeItem('userForEdit');
      this.router.navigate(['admin']);
    })
  }
}
