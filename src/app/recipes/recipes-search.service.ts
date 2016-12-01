import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecipesSearchService {

  private url = 'http://api.yummly.com/v1/api/recipes?'
  private API_ID = 'aba9649e'
  private API_KEY = 'b9fd43382a58f32002460910507123b1' 

  constructor(private http: Http) { }

  searchRecipe (searchTerm: String){
      let queryString = `_app_id=${this.API_ID}&_app_key=${this.API_KEY}&allowedCuisine[]=cuisine^cuisine-${searchTerm}&maxResult=30`

      return this.http.get(this.url + queryString)
                      .toPromise()
                      .then(response => response.json())
  }

}
