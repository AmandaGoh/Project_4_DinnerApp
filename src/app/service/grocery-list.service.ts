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
        var divNo: string;
        //check which div recipe is dropped in
        if (event.target.className) {
          var className = event.target.className
          var regex = /child\s(.*)$/g
          divNo = regex.exec(className)[1]
        } else if (event.toElement.offsetParent.className) {
          var className = event.toElement.offsetParent.className
          var regex = /child\s(.*)$/g
          divNo = regex.exec(className)[1]
        }

        //update weekly recipe list in db
        this.af.database.object('/weekly-lists/' + this.user.uid + '/day-' + divNo).update({recipe: newRecipeKey})
        this.af.database.object('/grocery-lists/' + this.user.uid + '/day-' + divNo).update({ingredients: ingredients})
    }

  }
}
