import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg = '';

  constructor(private service: AuthService, private routes: Router) { }

  ngOnInit(): void {
  }

  check(uname: string, p: string) {
    const output = this.service.checkusernameandpassword(uname, p);
    if (output === true) {
      this.routes.navigate(['/dashboard']);
    } else {
      this.msg = 'Invalid username or password';
    }
  }

}
