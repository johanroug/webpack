import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is simply a test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [
        new Ingredient("johan3", 22),
        new Ingredient("johan3", 23)
      ]),
    new Recipe(
      "Number 3",
      "My item number 2",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [
        new Ingredient("johan5", 24),
        new Ingredient("johan6", 25)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
