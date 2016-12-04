import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, AuthProviders} from 'angularfire2';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent{
  user: {
    uid?: string;
  };
  groceryList: FirebaseObjectObservable<any>;
  message: String;
  isAuth = false;

  constructor(
    public af : AngularFire,
  ) {
    af.auth.subscribe(user => {
      if(user) {
        this.isAuth = true;
        this.groceryList = af.database.object('/grocery-lists/' + user.uid + '/day-one/ingredients')
      } else {
        this.user = {};
        this.isAuth = false;
        this.message = 'Please log in to view your grocery list'
      }
    });
  }

}
