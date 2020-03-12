import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'router-example';
  isLoggedIn = false;

  constructor(private routes: Router) {}

  ngOnInit() {
    if (localStorage.getItem('username')) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    localStorage.removeItem('username');
    this.routes.navigate(['/login']);
    alert('logged out successfully');
  }
}
