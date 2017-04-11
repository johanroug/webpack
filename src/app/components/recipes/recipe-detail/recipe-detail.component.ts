import { Recipe } from '../recipe.model';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
}
