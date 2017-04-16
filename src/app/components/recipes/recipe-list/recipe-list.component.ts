import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[];

  constructor(private recipeService: RecipeService) {};

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  selectRecipe(item: Recipe) {
    this.recipeService.recipeSelected.emit(item);
  }
}
