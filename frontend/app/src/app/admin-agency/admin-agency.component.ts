import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EstateService } from '../services/estate.service';

@Component({
  selector: 'app-admin-agency',
  templateUrl: './admin-agency.component.html',
  styleUrls: ['./admin-agency.component.css']
})
export class AdminAgencyComponent implements OnInit {

  constructor(private estateService: EstateService, private router: Router) { }

  ngOnInit(): void {
  }

  @ViewChild('f') form: NgForm;

  add() {
    this.estateService.addAgency(this.form).subscribe(agency => {
      this.router.navigate(['admin']);
    })
  }
}