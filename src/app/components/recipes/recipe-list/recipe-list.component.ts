import { Recipe } from '../recipe.model';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
  @Output() recipeSendDetail = new EventEmitter();
  public recipes: Recipe[] = [
    new Recipe("A test recipe", "This is simply a test", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("Number 2", "My item number 2", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg")
  ];

  selectRecipe(item: Recipe) {
    this.recipeSendDetail.emit(item);
  }
}
