import { Component, OnInit } from '@angular/core';
import { Estate } from '../models/estate';
import { User } from '../models/user';
import { EstateService } from '../services/estate.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-estate-details',
  templateUrl: './estate-details.component.html',
  styleUrls: ['./estate-details.component.css']
})
export class EstateDetailsComponent implements OnInit {

  constructor(private estateService: EstateService, private userService: UserService) { }

  ngOnInit(): void {
    this.estate = JSON.parse(localStorage.getItem('estate'));
    this.loggedUser = JSON.parse(localStorage.getItem('user'));

    this.estate.images.forEach(i => this.activeSlide.push(false));
    this.activeSlide[0] = true;

    this.estateService.getAllEstates().subscribe((estates: Estate[]) => {
      estates = estates.filter(e => 
        e.sold == 0 && e.type == this.estate.type && e.city == this.estate.city && e.municipality == this.estate.municipality && e.location == this.estate.location
      );

      const sum = estates.reduce((a, b) => a + b.price / b.area, 0);
      this.avgSquarePrice = Math.round(sum / estates.length);
    })
  }

  loggedUser: User;
  estate: Estate;
  avgSquarePrice: number;

  activeSlide: boolean[] = [];
  activeIndex: number = 0;

  message: string = '';
  showPhone: boolean = false;

  imageClick() {
    this.activeSlide[this.activeIndex] = false;
    this.activeIndex = (this.activeIndex + 1) % this.activeSlide.length;
    this.activeSlide[this.activeIndex] = true;
  }

  getAdvertiserName() {
    return this.estate.agencyName != '' ? this.estate.agencyName : this.estate.advertiserFirstname + ' ' + this.estate.advertiserLastname;
  }

  getHeatingType() {
    if (this.estate.heating == 'cg') return 'centralno grejanje';
    if (this.estate.heating == 'eg') return 'etazno grejanje';
    if (this.estate.heating == 'ta') return 'termoakumulacione peci';
    if (this.estate.heating == 'gas') return 'gas';
    if (this.estate.heating == 'podno') return 'podno grejanje';
    if (this.estate.heating == 'pumpe') return 'toplotne pumpe';

    return '/';
  }

  getParking() {
    return this.estate.parking ? 'Da' : 'Ne';
  }

  isMoreExpensive() {
    return Math.round(this.estate.price / this.estate.area) > this.avgSquarePrice;
  }

  checked(characteristic: string) {
    return this.estate.characteristics.find(c => c == characteristic) != null;
  }

  show() {
    this.showPhone = true; 
  }

  inFavourites() {
    return this.loggedUser.favourites.find(e => e == this.estate.id) != null
  }

  addToFavourites() {
    if (this.loggedUser.favourites.length == 5) {
      this.message = "Vec imate 5 omiljenih nekretnina!";
      return;
    }

    this.userService.addToFavourites(this.loggedUser.username, this.estate.id).subscribe((user: User) => {
      this.loggedUser.favourites.push(this.estate.id);
      localStorage.setItem('user', JSON.stringify(this.loggedUser));
    })
  }
}
