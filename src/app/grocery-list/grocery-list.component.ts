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
  groceryListDayOne: FirebaseObjectObservable<any>;
  groceryListDayTwo: FirebaseObjectObservable<any>;
  groceryListDayThree: FirebaseObjectObservable<any>;
  groceryListDayFour: FirebaseObjectObservable<any>;
  groceryListDayFive: FirebaseObjectObservable<any>;
  groceryListDaySix: FirebaseObjectObservable<any>;
  groceryListDaySeven: FirebaseObjectObservable<any>;

  message: String;
  isAuth = false;

  constructor(
    public af : AngularFire,
  ) {
    af.auth.subscribe(user => {
      if(user) {
        this.isAuth = true;
        this.groceryListDayOne = af.database.object('/grocery-lists/' + user.uid + '/day-one/ingredients')
        this.groceryListDayTwo = af.database.object('/grocery-lists/' + user.uid + '/day-two/ingredients')
        this.groceryListDayThree = af.database.object('/grocery-lists/' + user.uid + '/day-three/ingredients')
        this.groceryListDayFour = af.database.object('/grocery-lists/' + user.uid + '/day-four/ingredients')
        this.groceryListDayFive = af.database.object('/grocery-lists/' + user.uid + '/day-five/ingredients')
        this.groceryListDaySix = af.database.object('/grocery-lists/' + user.uid + '/day-six/ingredients')
        this.groceryListDaySeven = af.database.object('/grocery-lists/' + user.uid + '/day-seven/ingredients')
      } else {
        this.user = {};
        this.isAuth = false;
        this.message = 'Please log in to view your grocery list'
      }
    });
  }

}
