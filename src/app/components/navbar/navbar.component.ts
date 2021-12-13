import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logged = false;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    console.log(`onLogin`);
    this.logged = true;
    window.localStorage.setItem('logged', 'true');
  }

  onLogout() {
    console.log(`onLogout`);
    this.logged = false;
    window.localStorage.removeItem('logged');
  }

}
