import { Ingredient } from '../../shared/ingredient.model';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent {
  @Output() newItem = new EventEmitter<Ingredient>();

  addItem(name, amount) {
    const newIngredient = new Ingredient(name.value, amount.value);
    this.newItem.emit(newIngredient);
  }
}
