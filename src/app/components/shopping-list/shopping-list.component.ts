import { Ingredient } from '../shared/ingredient.model';
import { Component } from '@angular/core';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Suckar", 2),
    new Ingredient("Apples", 10)
  ];
}
