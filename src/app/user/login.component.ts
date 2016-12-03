import { Component} from '@angular/core';

import { UserService } from '../service/user.service';

import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UserService ]
})
export class LoginComponent{

    username: String;
    user = {};

    constructor(
      public af: AngularFire,
      private userService: UserService
    ) {
      this.af.auth.subscribe(user => {
        if(user) {
          this.user = user;
          this.username = user.auth.displayName
        } else {
          this.user = {};
          this.username = ''
        }
      });
    }

    loginGoogle() {
        this.userService.loginGoogle()
                        .then( response => this.username = response.auth.displayName)
    }

    loginFB() {
        this.userService.loginFB()
                        .then ( response => this.username = response.auth.displayName)
    }

    logout() {
      this.userService.logout()
      this.username = ''
    }
}
