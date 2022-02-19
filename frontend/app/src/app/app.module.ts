import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { BuyerHomeComponent } from './buyer-home/buyer-home.component';
import { AdvertiserHomeComponent } from './advertiser-home/advertiser-home.component';
import { AddEstateComponent } from './add-estate/add-estate.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { EditEstateComponent } from './edit-estate/edit-estate.component';
import { FooterComponent } from './footer/footer.component';
import { AddEstateJsonComponent } from './add-estate-json/add-estate-json.component';
import { AddEstateImagesComponent } from './add-estate-images/add-estate-images.component';
import { EstateDetailsComponent } from './estate-details/estate-details.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAgencyComponent } from './admin-agency/admin-agency.component';
import { AdminLocationComponent } from './admin-location/admin-location.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    PasswordChangeComponent,
    BuyerHomeComponent,
    AdvertiserHomeComponent,
    AddEstateComponent,
    GuestHomeComponent,
    EditEstateComponent,
    FooterComponent,
    AddEstateJsonComponent,
    AddEstateImagesComponent,
    EstateDetailsComponent,
    AdminHomeComponent,
    AdminAgencyComponent,
    AdminLocationComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecaptchaModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
