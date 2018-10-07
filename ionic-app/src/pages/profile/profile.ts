import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  @ViewChild(Nav) nav: Nav;

  constructor() {

  }

  routeToLogin() {
    this.nav.setRoot(LoginPage);
  }

}
