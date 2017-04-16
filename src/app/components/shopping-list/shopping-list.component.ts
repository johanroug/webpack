import { ShoppinglistService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Component } from '@angular/core';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {
  ingredients: Ingredient[];

  constructor(private shoppinglistService: ShoppinglistService) {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientsChanged.subscribe((ingredientData: Ingredient[]) => {
      this.ingredients = ingredientData;
    });
  }
}
