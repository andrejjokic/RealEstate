import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEstateComponent } from './add-estate/add-estate.component';
import { AdvertiserHomeComponent } from './advertiser-home/advertiser-home.component';
import { BuyerHomeComponent } from './buyer-home/buyer-home.component';
import { EditEstateComponent } from './edit-estate/edit-estate.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { LoginComponent } from './login/login.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: GuestHomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'passwordChange', component: PasswordChangeComponent},
  {path: 'buyer', component: BuyerHomeComponent},
  {path: 'advertiser', component: AdvertiserHomeComponent},
  {path: 'addEstate', component: AddEstateComponent},
  {path: 'editEstate', component: EditEstateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
