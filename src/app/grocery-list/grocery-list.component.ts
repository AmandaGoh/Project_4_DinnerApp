import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, AuthProviders} from 'angularfire2';

import { GroceryListService } from '../service/grocery-list.service'

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
  providers: [ GroceryListService ]
})
export class GroceryListComponent implements OnInit {
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
    private groceryListService : GroceryListService
  ) { }

  ngOnInit() {
        this.af.auth.subscribe(user => {
      if(user) {
        this.isAuth = true;
        this.groceryListDayOne = this.af.database.object('/grocery-lists/' + user.uid + '/day-one/ingredients')
        this.groceryListDayTwo = this.af.database.object('/grocery-lists/' + user.uid + '/day-two/ingredients')
        this.groceryListDayThree = this.af.database.object('/grocery-lists/' + user.uid + '/day-three/ingredients')
        this.groceryListDayFour = this.af.database.object('/grocery-lists/' + user.uid + '/day-four/ingredients')
        this.groceryListDayFive = this.af.database.object('/grocery-lists/' + user.uid + '/day-five/ingredients')
        this.groceryListDaySix = this.af.database.object('/grocery-lists/' + user.uid + '/day-six/ingredients')
        this.groceryListDaySeven = this.af.database.object('/grocery-lists/' + user.uid + '/day-seven/ingredients')
      } else {
        this.user = {};
        this.isAuth = false;
        this.message = 'Please log in to view your grocery list'
      }
    });
  }
  

  //delete ingredient
  // removeItem(ingredient){
  //   // console.log(ingredient)
  //   this.groceryListDayOne.subscribe(
  //     list => this.setArray(Object.values(list), list.indexOf(ingredient))
  //   )
  // }

  // setArray(list, index){
  //   let newList =list.slice(0,-2)
  //   newList.splice(index, 1)
  //   // console.log(newList)
  //   this.groceryListService.setArray(newList)
  // }
}
