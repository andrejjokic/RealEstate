import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estate } from '../models/estate';
import { User } from '../models/user';
import { EstateService } from '../services/estate.service';

@Component({
  selector: 'app-advertiser-home',
  templateUrl: './advertiser-home.component.html',
  styleUrls: ['./advertiser-home.component.css']
})
export class AdvertiserHomeComponent implements OnInit {

  constructor(private estateService: EstateService, private router: Router) { }

  ngOnInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));

    this.estateService.getAllEstates().subscribe((estates: Estate[]) => {
      this.myEstates = estates.filter(e => e.advertiser == this.loggedUser.username);
    })
  }

  loggedUser: User;
  myEstates: Estate[] = [];

  canEdit(estate: Estate) {
    let lastDateModified = new Date(estate.lastModified);
    let now = new Date();

    return Math.abs(now.getTime() - lastDateModified.getTime()) / 36e5 >= 1;
  }

  refresh() {
    this.estateService.getAllEstates().subscribe((estates: Estate[]) => {
      this.myEstates = estates.filter(e => e.advertiser == this.loggedUser.username);
    })
  }

  sell(estate: Estate) {
    this.estateService.sellEstate(estate.id).subscribe((estate: Estate) => {
      this.refresh();
    })
  }

  edit(estate: Estate) {
    localStorage.setItem('estate', JSON.stringify(estate));
    this.router.navigate(['editEstate']);
  }
}
