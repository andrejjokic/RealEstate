import { Component, OnInit, ViewChild } from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Agency } from '../models/agency';
import { EstateService } from '../services/estate.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private userService: UserService, private router: Router, private estateService: EstateService) { 
  }

  ngOnInit(): void {
    this.estateService.getAllAgencies().subscribe((agencies: Agency[]) => {
      this.agencies = agencies;
    })
  }

  @ViewChild('f') signupForm: NgForm;
  
  agencies: Agency[] = [];
  imageOk: boolean = false;
  minImageDimension = 100;
  maxImageDimension = 300;

  password_message: string = "";
  image_message: string = "";
  register_message: string = "";

  onFileSelected(event: any) {    
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      const Img = new Image();
      const filesToUpload = (event.target.files);
      Img.src = URL.createObjectURL(filesToUpload[0]);
      
      reader.onload = (event: any) => {
        var img = new Image();
        this.signupForm.value.imageFile = event.target.result;
      }

      Img.onload = (e: any) => {
        const height = e.path[0].height;
        const width = e.path[0].width;
        if (height < this.minImageDimension || width < this.minImageDimension || height > this.maxImageDimension || width > this.maxImageDimension) {
          this.image_message = "Dimenzije slike moraju biti izmedju 100x100px i 300x300px!";
        } else {
          this.imageOk = true
          this.image_message = "";
        }
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  
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

  add() {
    this.userService.getUserByUsername(this.signupForm.value.korime).subscribe((user: User) => {
      if (user) this.register_message = "Korisnicko ime zauzeto!";
      else {
        this.userService.getUserByEmail(this.signupForm.value.email).subscribe((user: User) => {
          if (user) this.register_message = "Email zauzet!";
          else {
            this.userService.addUser(this.signupForm).subscribe((user) => {
              this.signupForm.reset();
              this.register_message = "Korisnik uspesno dodat!";
              
              this.router.navigate(['']);
            })
          }
        })
      }
    })
  }

}
