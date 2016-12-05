import { Component, Output, EventEmitter} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent{

  @Output() searchTerm= new EventEmitter<string>();

  constructor(public fb: FormBuilder) { }

  public chooseCuisineForm = this.fb.group({
    cuisine: ''
  });

//cuisine options
  cuisines = ['anything', 'chinese', 'italian', 'indian', 'french', 'thai', 'japanese']

  searchCuisine(event: any){
    this.searchTerm.emit(this.chooseCuisineForm.value.cuisine)
  }

}
