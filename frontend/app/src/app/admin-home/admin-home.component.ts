import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
   this.refresh();
  }

  allUsers: User[] = [];

  refresh() {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.allUsers = users;
    })
  }

  getNewUsers() {
    return this.allUsers.filter(u => u.state == 'new');
  }

  getType(user: User) {
    if (user.type == 'buyer') return 'Kupac';
    if (user.type == 'advertiser') return 'Oglasivac';
    return 'Administrator'
  }

  getRegisteredUsers() {
    return this.allUsers.filter(u => u.type != 'admin' && u.state == 'registered')
  }

  acceptUser(user) {
    this.userService.acceptUser(user.username).subscribe(resp => {
      this.refresh();
    })
  }

  rejectUser(user) {
    this.userService.deleteUser(user.username).subscribe(resp => {
      this.refresh();
    })
  }

  editUser(user) {
    localStorage.setItem('userForEdit', JSON.stringify(user));
    this.router.navigate(['admin/editUser']);
  }
}
