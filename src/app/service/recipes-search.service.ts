import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecipesSearchService {

  private search_url = 'http://api.yummly.com/v1/api/recipes?'
  private get_url = 'http://api.yummly.com/v1/api/recipe/'
  private API_ID = 'aba9649e'
  private API_KEY = 'b9fd43382a58f32002460910507123b1' 

  constructor(private http: Http) { }

  searchRecipe (searchTerm: String){
      let queryString = `_app_id=${this.API_ID}&_app_key=${this.API_KEY}&allowedCuisine[]=cuisine^cuisine-${searchTerm}&maxResult=49`

      return this.http.get(this.search_url + queryString)
                      .toPromise()
                      .then(response => response.json())
  }

  getIngredients (recipeID: String) {
      console.log( 'recipe id is ' + recipeID)
      let queryString= `${recipeID}?_app_id=${this.API_ID}&_app_key=${this.API_KEY}`

      return this.http.get(this.get_url + queryString)
                      .toPromise()
                      .then(response => response.json())
  }

}
