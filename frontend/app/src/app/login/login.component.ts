import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  @ViewChild('f') loginForm: NgForm;

  login_message: string = "";

  login() {
    this.userService.getUserByUsername(this.loginForm.value.korime).subscribe((user: User) => {
      if (!user || user.password != this.loginForm.value.lozinka || user.state != 'registered') this.login_message = "Korisnicko ime/Lozinka su neispravni!";
      else {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate([user.type]);
      }
    })
  }
}
