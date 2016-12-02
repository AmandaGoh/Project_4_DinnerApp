import { Component} from '@angular/core';

import { UserService } from '../service/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UserService ]
})
export class LoginComponent{

    username: String;

    constructor (private userService: UserService){ }

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
