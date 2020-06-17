import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router,
              private authenticationService: AuthService) {
  }

  ngOnInit() {
  }

  handleBasicAuthLogin() {
    this.authenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          this.router.navigate(['blog']);
            this.invalidLogin = false;
        },
        error => {
          console.log(this.errorMessage);
          this.invalidLogin = true;
        }
      );
  }

}
