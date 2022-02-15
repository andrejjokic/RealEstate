import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estate } from '../models/estate';

@Component({
  selector: 'app-add-estate-json',
  templateUrl: './add-estate-json.component.html',
  styleUrls: ['./add-estate-json.component.css']
})
export class AddEstateJsonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  file: File;
  fileStr;
  message: string = "";

  onFileChanged(event) {
    this.file = event.target.files[0]
    const fileReader = new FileReader();
    fileReader.readAsText(this.file, "UTF-8");

    fileReader.onload = () => {
      this.fileStr = fileReader.result;
    }

    fileReader.onerror = (error) => {
      this.message = "Neispravan format JSON fajla!";
    }

  }

  checkJSONInput(fileObj) {
    return fileObj.name != null && fileObj.type != null && fileObj.city != null && fileObj.municipality != null
      && fileObj.location != null && fileObj.street != null && fileObj.price != null && fileObj.area != null 
      && fileObj.rooms != null && fileObj.floor != null && fileObj.totalFloors != null && fileObj.description != null
      && fileObj.constructionYear != null && fileObj.state != null && fileObj.parking != null && fileObj.heating != null 
      && fileObj.characteristics != null && fileObj.monthlyFee != null && fileObj.buses != null && fileObj.sold != null 
      && fileObj.advertiserFirstname != null && fileObj.advertiserLastname != null && fileObj.advertiserPhone;
  }

  next() {
    try {
      let fileObj = JSON.parse(this.fileStr);

      if (!this.checkJSONInput(fileObj)) {
        this.message = "Nisu svi podaci prisutni!";
        return;
      }

      let estate = {
        name: fileObj.name,
        type: fileObj.type,
        city: fileObj.city,
        municipality: fileObj.municipality,
        location: fileObj.location,
        street: fileObj.street,
        price: fileObj.price,
        area: fileObj.area,
        rooms: fileObj.rooms,
        floor: fileObj.floor,
        totalFloors: fileObj.totalFloors,
        description: fileObj.description,
        constructionYear: fileObj.constructionYear,
        state: fileObj.state,
        heating: fileObj.heating,
        parking: fileObj.parking,
        characteristics: fileObj.characteristics,
        monthlyFee: fileObj.monthlyFee,
        buses: fileObj.buses,
        sold: fileObj.sold,
        lastModified: new Date().toLocaleString(),
        advertiserFirstname: fileObj.advertiserFirstname,
        advertiserLastname: fileObj.advertiserLastname,
        advertiserPhone: fileObj.advertiserPhone,
        advertiserLicense: fileObj.advertiserLicense,
        agencyName: fileObj.agencyName,
        agencyPIB: fileObj.agencyPIB,
        agencyCity: fileObj.agencyCity,
        agencyAddress: fileObj.agencyAddress,
        agencyPhone: fileObj.agencyPhone
      }

      localStorage.setItem('estate', JSON.stringify(estate));
      this.router.navigate(['addEstate/images'])
    
    } catch(error) {
      this.message = "Neispravan format JSON fajla!";
    }
  }
}
