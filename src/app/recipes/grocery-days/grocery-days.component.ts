import { Component, Input } from '@angular/core';

import { RecipesSearchService } from '../../service/recipes-search.service';
import { GroceryListService } from '../../service/grocery-list.service';

@Component({
  selector: 'app-grocery-days',
  templateUrl: './grocery-days.component.html',
  styleUrls: ['./grocery-days.component.css'],
  providers: [ RecipesSearchService, GroceryListService ]
})
export class GroceryDaysComponent{

  @Input() draggedRecipe: any;

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
  ) { }

  drop(event){
  console.log('drop')
    if(this.draggedRecipe) {
      this.recipesSearchService.getIngredients(this.draggedRecipe.id)
                                .then (
                                  response => 
                                  this.groceryListService.updateList(response.ingredientLines)
                                );                        
      }
    switch (event.target.className || event.toElement.offsetParent.className) {
      case 'col-xs-1 child one':
        this.divOneRecipe = this.draggedRecipe;
        break;
      case 'col-xs-1 child two':
        this.divTwoRecipe = this.draggedRecipe;
        break;
      case 'col-xs-1 child three':
        this.divThreeRecipe = this.draggedRecipe;
        break;
      case 'col-xs-1 child four':
        this.divFourRecipe = this.draggedRecipe;
        break;
      case 'col-xs-1 child five':
        this.divFiveRecipe = this.draggedRecipe;
        break;
      case 'col-xs-1 child six':
        this.divSixRecipe = this.draggedRecipe;
        break;
      case 'col-xs-1 child seven':
        this.divSevenRecipe = this.draggedRecipe;
    }
  }


}
