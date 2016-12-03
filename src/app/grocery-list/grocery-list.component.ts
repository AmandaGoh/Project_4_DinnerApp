import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent{
  user = {};
  ingredients: any;

  constructor(af : AngularFire) {
    af.auth.subscribe(user => {
      if(user) {
        this.user = user;
      } else {
        this.user = {};
      }
    });
    // this.ingredients = af.database.object('/grocery-lists/'+ this.user.uid)
    // console.log(this.ingredients)
  }

}
