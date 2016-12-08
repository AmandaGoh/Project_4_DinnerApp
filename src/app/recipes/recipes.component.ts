import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { RecipesSearchService } from '../service/recipes-search.service';
import { GroceryListService } from '../service/grocery-list.service';

import { AngularFire } from 'angularfire2';

function randomize(array){
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipesSearchService, GroceryListService ]
})

export class RecipesComponent implements OnInit {
  user = {};
  isAuth = false;
  recipes: any;
  formValue: any;
  draggedRecipe: any;
  ingredients: any;
  arrayOne= [];
  arrayTwo= [];
  arrayThree= [];
  arrayFour = [];
  arrayFive = [];
  arraySix = [];
  arraySeven = [];
  @Input() searchTerm: string;

  constructor(
    private recipesSearchService: RecipesSearchService,
    private groceryListService: GroceryListService,
    public af : AngularFire
  ){ }

  ngOnInit() {
    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
        this.isAuth = true;
      } else {
        this.user = {};
        this.isAuth = false;
      } 
    })
  }

  ngOnChanges(inputChanges) { this.searchCuisine(inputChanges.searchTerm.currentValue)}

  searchCuisine(searchTerm){
    this.recipesSearchService.searchRecipe(searchTerm)
                             .then(
                               response => 
                               //split results into 7 arrays
                               this.splitArray(response.matches)
                              //  this.recipes = randomize(response.matches).splice(0,7)  
                              
                             )
  }

  splitArray(response) {
    let randomizeArray = randomize(response)
    this.arrayOne = randomizeArray.splice(0,7)
    this.arrayTwo = randomizeArray.splice(0,7)
    this.arrayThree = randomizeArray.splice(0,7)
    this.arrayFour = randomizeArray.splice(0,7)
    this.arrayFive = randomizeArray.splice(0,7)
    this.arraySix = randomizeArray.splice(0,7)
    this.arraySeven = randomizeArray
    // console.log(randomizeArray)
  }

  //drag and drop
  dragStart(event, recipe: any) {
    console.log(event)
    this.draggedRecipe = recipe;
    console.log(this.draggedRecipe)
  }

  dragEnd(event) {
    // console.log('drag end')
    this.draggedRecipe = null;
  }

}
