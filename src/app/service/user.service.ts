import { Injectable, EventEmitter } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';

import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class UserService {

  constructor( 
    public af: AngularFire,
    private notificationsService: NotificationsService
  ) { }

   loginGoogle(){
     return this.af.auth.login({
       provider: AuthProviders.Google
     }).catch(error => {
        this.notificationsService.error(
                            'Error',
                             error.message
                          )
    });
   }

   loginFB() {
     return this.af.auth.login({
       provider: AuthProviders.Facebook
     }).catch(error => {
      //  console.log(error.message)
       this.notificationsService.error(
                            'Error',
                             error.message
                          )
     })
   }

   logout(){
       this.af.auth.logout();
   }

}
