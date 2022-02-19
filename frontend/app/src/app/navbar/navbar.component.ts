import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isUserLogged() {
    return localStorage.getItem('user') != null;
  }

  isUserAdvertiser() {
    let user = JSON.parse(localStorage.getItem('user'));
    return user && user.type == 'advertiser';
  }

  homePage() {
    let user = JSON.parse(localStorage.getItem('user'));
    return user ? user.type : '';
  }

  logout() {
    localStorage.removeItem('user');
  }

  isUserAdmin() {
    let user = JSON.parse(localStorage.getItem('user'));
    return user && user.type == 'admin';
  }
}
