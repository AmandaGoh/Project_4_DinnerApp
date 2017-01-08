import { Component, Input, OnInit } from '@angular/core';

import { RecipesSearchService } from '../../service/recipes-search.service';
import { GroceryListService } from '../../service/grocery-list.service';

import { AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-grocery-days',
  templateUrl: './grocery-days.component.html',
  styleUrls: ['./grocery-days.component.css'],
  providers: [ RecipesSearchService, GroceryListService ]
})
export class GroceryDaysComponent implements OnInit{
  user = {};
  isAuth = false;
  recipeID_DayOne: FirebaseObjectObservable<any>;
  recipeID_DayTwo: FirebaseObjectObservable<any>;
  recipeID_DayThree: FirebaseObjectObservable<any>;
  recipeID_DayFour: FirebaseObjectObservable<any>;
  recipeID_DayFive: FirebaseObjectObservable<any>;
  recipeID_DaySix: FirebaseObjectObservable<any>;
  recipeID_DaySeven: FirebaseObjectObservable<any>;

  divOneRecipe: any; 
  divTwoRecipe: any; 
  divThreeRecipe: any;
  divFourRecipe: any;
  divFiveRecipe: any;
  divSixRecipe: any;
  divSevenRecipe: any;

  constructor(
    private recipesSearchService: RecipesSearchService,
    private groceryListService: GroceryListService,
    public af : AngularFire
  ) { }

  ngOnInit() { this.checkUserAuth() }

  checkUserAuth(){
    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
        this.isAuth = true;
        this.getRecipesList(user)
      } else {
        this.user = {};
        this.isAuth = false;
        // this.af.database.object('/weekly-lists/' + user.uid + '/day-one/recipe' ).;
        // console.log('user logged out')
      }
    })
  }

  getRecipesList(user) {
    //get Day One Recipe
        this.recipeID_DayOne = this.af.database.object('/weekly-lists/' + user.uid + '/day-one/recipe' )
        this.recipeID_DayOne.subscribe( value => {
          if (value.$value != null){
          let recipeObservable = this.af.database.list('/recipes', {
                query: {
                  orderByKey: true,
                  equalTo: value.$value
                }
              });
              recipeObservable.subscribe(queriedRecipe => 
                  // console.log(queriedRecipe)
                  this.divOneRecipe = queriedRecipe[0]
              )
          } else {
                  this.divOneRecipe = {};
          } 
        })   
    //get Day Two Recipe
        this.recipeID_DayTwo = this.af.database.object('/weekly-lists/' + user.uid + '/day-two/recipe' )
        this.recipeID_DayTwo.subscribe( value => {
          if (value.$value != null){
          let recipeObservable = this.af.database.list('/recipes', {
                query: {
                  orderByKey: true,
                  equalTo: value.$value
                }
              });
              recipeObservable.subscribe(queriedRecipe => 
                  this.divTwoRecipe = queriedRecipe[0]
              )
          } else {
                  this.divTwoRecipe = {};
          } 
        })   
    //get Day Three Recipe
        this.recipeID_DayThree = this.af.database.object('/weekly-lists/' + user.uid + '/day-three/recipe' )
        this.recipeID_DayThree.subscribe( value => {
          if (value.$value != null){
          let recipeObservable = this.af.database.list('/recipes', {
                query: {
                  orderByKey: true,
                  equalTo: value.$value
                }
              });
              recipeObservable.subscribe(queriedRecipe => 
                  this.divThreeRecipe = queriedRecipe[0]
              )
          } else {
                  this.divThreeRecipe = {};
          }   
        })  
    //get Day Four Recipe
        this.recipeID_DayFour = this.af.database.object('/weekly-lists/' + user.uid + '/day-four/recipe' )
        this.recipeID_DayFour.subscribe( value => { 
          if (value.$value != null){
          let recipeObservable = this.af.database.list('/recipes', {
                query: {
                  orderByKey: true,
                  equalTo: value.$value
                }
              });
              recipeObservable.subscribe(queriedRecipe => 
                  this.divFourRecipe = queriedRecipe[0]
              )
          } else {
                  this.divFourRecipe = {};
          }   
        }) 
      //get Day Five Recipe
          this.recipeID_DayFive = this.af.database.object('/weekly-lists/' + user.uid + '/day-five/recipe' )
          this.recipeID_DayFive.subscribe( value => { 
            if (value.$value != null){
            let recipeObservable = this.af.database.list('/recipes', {
                  query: {
                    orderByKey: true,
                    equalTo: value.$value
                  }
                });
                recipeObservable.subscribe(queriedRecipe => 
                    this.divFiveRecipe = queriedRecipe[0]
                )
            } else {
                    this.divFiveRecipe = {};
            }   
          })  
      //get Day Six Recipe
          this.recipeID_DaySix = this.af.database.object('/weekly-lists/' + user.uid + '/day-six/recipe' )
          this.recipeID_DaySix.subscribe( value => { 
            if (value.$value != null){
            let recipeObservable = this.af.database.list('/recipes', {
                  query: {
                    orderByKey: true,
                    equalTo: value.$value
                  }
                });
                recipeObservable.subscribe(queriedRecipe => 
                    this.divSixRecipe = queriedRecipe[0]
                )
            } else {
                    this.divSixRecipe = {};
            }   
          })  
      //get Day Six Recipe
          this.recipeID_DaySix = this.af.database.object('/weekly-lists/' + user.uid + '/day-six/recipe' )
          this.recipeID_DaySix.subscribe( value => { 
            if (value.$value != null){
            let recipeObservable = this.af.database.list('/recipes', {
                  query: {
                    orderByKey: true,
                    equalTo: value.$value
                  }
                });
                recipeObservable.subscribe(queriedRecipe => 
                    this.divSixRecipe = queriedRecipe[0]
                )
            } else {
                    this.divSixRecipe = {};
            }   
          })      
      //get Day Seven Recipe
            this.recipeID_DaySeven = this.af.database.object('/weekly-lists/' + user.uid + '/day-seven/recipe' )
            this.recipeID_DaySeven.subscribe( value => { 
              if (value.$value != null){
              let recipeObservable = this.af.database.list('/recipes', {
                    query: {
                      orderByKey: true,
                      equalTo: value.$value
                    }
                  });
                  recipeObservable.subscribe(queriedRecipe => 
                      this.divSevenRecipe = queriedRecipe[0]
                  )
              } else {
                      this.divSevenRecipe = {};
              }   
            })                      

    }

  @Input() draggedRecipe: any;



  drop(event){
  // console.log('drop')
    if(this.draggedRecipe) {
      // console.log(this.draggedRecipe)
      this.recipesSearchService.getIngredients(this.draggedRecipe.id)
                                .then (
                                  response => 
                                  this.groceryListService.updateList(response, event)
                                );                        
      }
  }


}
