import { Component, OnInit } from '@angular/core';
import { Estate } from '../models/estate';
import { EstateService } from '../services/estate.service';

@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.css']
})
export class GuestHomeComponent implements OnInit {

  constructor(private estateService: EstateService) { }

  ngOnInit(): void {
    this.estateService.getAllEstates().subscribe((estates: Estate[]) => {
      this.newestEstates = estates.slice(-5);
    })
  }

  newestEstates: Estate[] = [];

  randomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  randomImage(estate: Estate) {
    return estate.images[this.randomInt(estate.images.length)];
  }

}
