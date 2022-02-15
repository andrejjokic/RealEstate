import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estate } from '../models/estate';
import { EstateService } from '../services/estate.service';

@Component({
  selector: 'app-add-estate-images',
  templateUrl: './add-estate-images.component.html',
  styleUrls: ['./add-estate-images.component.css']
})
export class AddEstateImagesComponent implements OnInit {

  constructor(private estateService: EstateService, private router: Router) { }

  ngOnInit(): void {
  }

  images: String[] = [];
  imagesOk: boolean = false;
  message: string = "";

  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      this.imagesOk = true;
      this.message = '';

      if (event.target.files.length < 3 || event.target.files.length > 6) {
        this.imagesOk = false;
        this.message = "Izaberite 3-6 slika nekretnine!"
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

  add() {
    let data = JSON.parse(localStorage.getItem('estate'));
    data.images = this.images;

    this.estateService.addEstate(data).subscribe((estate: Estate) => {
      localStorage.removeItem('estate');
      this.router.navigate(['advertiser']);
    })
  }
}
