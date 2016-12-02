import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2'

@Injectable()
export class UserService {
  user = {};

  constructor(
    public af: AngularFire
  ) {
    this.af.auth.subscribe(user => {
      if(user) {
        //user logged in
        // console.log(user)
        this.user = user;
      } else {
        //user NOT logged in
        this.user = {};
      }
    });
   }

   loginGoogle(){
     return this.af.auth.login({
       provider: AuthProviders.Google
     });
   }

   loginFB(){
     return this.af.auth.login({
       provider: AuthProviders.Facebook
     })
   }

   logout(){
       this.af.auth.logout();
   }

}
