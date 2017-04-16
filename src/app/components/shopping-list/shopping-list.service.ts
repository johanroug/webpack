import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppinglistService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Suckar", 2),
    new Ingredient("Apples", 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
