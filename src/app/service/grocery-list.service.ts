import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AngularFire, AuthProviders } from 'angularfire2'

@Injectable()
export class GroceryListService {
  user: {
    uid?: string;
  };
  isAuth = false;

  constructor(
    private http: Http,
    public af: AngularFire
  ) {this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
        this.isAuth = true;
      } else {
        this.user = {};
        this.isAuth = false;
      }
    });
  }

  updateList(recipe, event){
    if (this.isAuth === false ) {
      console.log('user not logged in')
    } else {
        // console.log(recipe)
        const newRecipe = {
          name: recipe.name,
          imageURL: recipe.images[0].hostedMediumUrl,
          yummlyID: recipe.id,
          ingredients: recipe.ingredientLines,
          servings: recipe.yield
        };

        var recipesRef = this.af.database.list('recipes');
        var newRecipeRef = recipesRef.push(newRecipe);
        //update recipe in db
        newRecipeRef

        var newRecipeKey = newRecipeRef.key;
        var ingredients = newRecipe.ingredients;
        // console.log(ingredients)
        //update weekly recipe list in db
        switch (event.target.className || event.toElement.offsetParent.className) {
        case 'recipe-box child one':
          this.af.database.object('/weekly-lists/' + this.user.uid + '/day-one').update({recipe: newRecipeKey})
          this.af.database.object('/grocery-lists/' + this.user.uid + '/day-one').update({ingredients: ingredients})
          break;
        case 'recipe-box child two':
          this.af.database.object('/weekly-lists/' + this.user.uid + '/day-two').update({recipe: newRecipeKey})
          this.af.database.object('/grocery-lists/' + this.user.uid + '/day-two').update({ingredients: ingredients})
          break;
        case 'recipe-box child three':
          this.af.database.object('/weekly-lists/' + this.user.uid + '/day-three').update({recipe: newRecipeKey})
          this.af.database.object('/grocery-lists/' + this.user.uid + '/day-three').update({ingredients: ingredients})
          break;
        case 'recipe-box child four':
          this.af.database.object('/weekly-lists/' + this.user.uid + '/day-four').update({recipe: newRecipeKey})
          this.af.database.object('/grocery-lists/' + this.user.uid + '/day-four').update({ingredients: ingredients})
          break;
        case 'recipe-box child five':
          this.af.database.object('/weekly-lists/' + this.user.uid + '/day-five').update({recipe: newRecipeKey})
          this.af.database.object('/grocery-lists/' + this.user.uid + '/day-five').update({ingredients: ingredients})
          break;
        case 'recipe-box child six':
          this.af.database.object('/weekly-lists/' + this.user.uid + '/day-six').update({recipe: newRecipeKey})
          this.af.database.object('/grocery-lists/' + this.user.uid + '/day-six').update({ingredients: ingredients})
          break;
        case 'recipe-box child seven':
          this.af.database.object('/weekly-lists/' + this.user.uid + '/day-seven').update({recipe: newRecipeKey})
          this.af.database.object('/grocery-lists/' + this.user.uid + '/day-seven').update({ingredients: ingredients})
      }

    }

  }

  setArray(list){
    console.log(list)
    this.af.database.object('/grocery-lists/' + this.user.uid + '/day-one').update({ingredients: list})
  }

}
