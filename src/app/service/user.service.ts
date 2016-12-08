import { Injectable, EventEmitter } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2'

@Injectable()
export class UserService {

  public errorReceived = new EventEmitter<any>();

  constructor( public af: AngularFire) { }

   loginGoogle(){
     return this.af.auth.login({
       provider: AuthProviders.Google
     }).catch(function(error){
     console.log(error)
    });
   }

   loginFB() {
     return this.af.auth.login({
       provider: AuthProviders.Facebook
     }).catch(error => {
       this.errorReceived.emit(error.message)
     })
   }

   logout(){
       this.af.auth.logout();
   }

}
