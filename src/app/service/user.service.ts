import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2'

@Injectable()
export class UserService {

  constructor( public af: AngularFire) { }

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
