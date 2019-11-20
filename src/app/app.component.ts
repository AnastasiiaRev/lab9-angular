import { Component, OnInit } from '@angular/core';

import { UsersService } from './core/api/users.service';
import { User } from './models/user.model';
import { AuthService } from './core/api/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  constructor(private usersService: UsersService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.usersService.currentUser
      .subscribe((user: User) => console.log('currentUser from APP', user));
  }
}
