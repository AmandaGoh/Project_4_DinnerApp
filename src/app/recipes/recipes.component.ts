import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { RecipesSearchService } from '../service/recipes-search.service';
import { GroceryListService } from '../service/grocery-list.service';

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
export class RecipesComponent {
  recipes: any;
  formValue: any;
  draggedRecipe: any;
  ingredients: any;
  @Input() searchTerm: string;

  constructor(
    private recipesSearchService: RecipesSearchService,
    private groceryListService: GroceryListService,
  ){ }

  ngOnChanges(inputChanges) { this.searchCuisine(inputChanges.searchTerm.currentValue)}

  searchCuisine(searchTerm){
    this.recipesSearchService.searchRecipe(searchTerm)
                             .then(
                               response => 
                               //split results into 7 arrays
                               this.recipes = randomize(response.matches).splice(0,7)  
                              
                             )
  }

  //drag and drop
  dragStart(event, recipe: any) {
    // console.log('drag start')
    this.draggedRecipe = recipe;
  }

  dragEnd(event) {
    // console.log('drag end')
    this.draggedRecipe = null;
  }

}
