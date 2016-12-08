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
    errorMsg: String;
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
                        .then ( response => {
                          if(response) {
                            this.username = response.auth.displayName
                          }
                          // } else {
                          //   console.log(response)
                          // }
                          // error => console.log(error)
                          // );
                        })
                       
        this.userService.errorReceived.subscribe(
              error => {
                if (error) {
                  this.errorMsg = error
                }
              }
        )
    }

    logout() {
      this.userService.logout()
      this.username = ''
    }
}
