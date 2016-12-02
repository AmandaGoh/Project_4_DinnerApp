import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  constructor(
    private recipesSearchService: RecipesSearchService,
    private groceryListService: GroceryListService,
    public fb: FormBuilder
  ){ }

  public chooseCuisineForm = this.fb.group({
    cuisine: ''
  });

//cuisine options
  cuisines = ['anything', 'chinese', 'italian', 'indian', 'french', 'thai', 'japanese']

  searchCuisine(event: any){
    let searchTerm = this.chooseCuisineForm.value.cuisine
    this.recipesSearchService.searchRecipe(searchTerm)
                             .then(
                               response => this.recipes = randomize(response.matches).splice(0,7)  
                              
                             )
  }

  //drag and drop
  dragStart(event, recipe: any) {
    console.log('drag start')
    this.draggedRecipe = recipe;
  }

  drop(event){
    console.log('drop')
    if(this.draggedRecipe) {
      this.recipesSearchService.getIngredients(this.draggedRecipe.id)
                               .then (
                                 response => 
                                 this.groceryListService.updateList(response.ingredientLines)
                               );                        
    }
  }

  dragEnd(event) {
    console.log('drag end')
    this.draggedRecipe = null;
  }

}
