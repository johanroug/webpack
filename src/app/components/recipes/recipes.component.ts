import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipeService]
})
export class RecipesComponent {
  selectedRecipe: any;

  constructor(private recipeService: RecipeService) {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
