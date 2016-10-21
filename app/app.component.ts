import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Calorie Tracker</h1>
    <edit-food
      [childSelectedFood]="selectedFood"
      (doneClickedSender)="finishedEditing()"
    ></edit-food>
    <new-food
      (newFoodSender)="addFood($event)"
    ></new-food>
    <food-list
      [childFoodList]="masterFoodList"
      (editClickSender)="setSelectedFood($event)"
    ></food-list>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
    new Food("Pizza", "Extra Cheese and pepperoni.", 600, new Date()),
    new Food("Banana", "Post-lunch snack", 90, new Date()),
    new Food("Soda", "Post-lunch snack", 150, new Date())
  ];

  public selectedFood = null;

  addFood(foodToAdd: Food) {
    this.masterFoodList.push(foodToAdd);
  }

  setSelectedFood(foodToEdit: Food) {
    this.selectedFood = foodToEdit;
  }

  finishedEditing() {
    this.selectedFood = null;
  }
}
