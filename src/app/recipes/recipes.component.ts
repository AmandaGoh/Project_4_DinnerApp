import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { RecipesSearchService } from '../service/recipes-search.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipesSearchService ]
})
export class RecipesComponent {
  recipes: any;
  formValue: any;

  constructor(
    private recipesSearchService: RecipesSearchService,
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
                               response => 
                              //  console.log(response.matches)
                               this.recipes = response.matches.splice(0,7)
                  
                             )
  }

}
