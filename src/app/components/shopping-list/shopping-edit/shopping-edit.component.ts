import { ShoppinglistService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent {
  constructor(private slService: ShoppinglistService) {}

  addItem(name, amount) {
    const newIngredient = new Ingredient(name.value, amount.value);

    this.slService.addIngredient(newIngredient);
  }
}
