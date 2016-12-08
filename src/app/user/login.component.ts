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
    isAuth = false;

    public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true
    }

    constructor(
      public af: AngularFire,
      private userService: UserService
    ) {
      this.af.auth.subscribe(user => {
        if(user) {
          this.user = user;
          this.username = user.auth.displayName
          this.isAuth = true;
        } else {
          this.user = {};
          this.username = ''
          this.isAuth = false;
        }
      });
    }

    loginGoogle() {
        this.userService.loginGoogle()
                        .then( response => this.username = response.auth.displayName)
    }

    loginFB() {
        this.userService.loginFB()
                        .then ( response => {
                          if(response){
                          // console.log(response.status)
                          this.username = response.auth.displayName
                          }
                        })
    }

    logout() {
      this.userService.logout()
      this.username = ''
    }
}
