import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Calorie Tracker</h1>
    <new-food
      (newFoodSender)="addFood($event)"
    ></new-food>
    <food-list
      [childFoodList]="masterFoodList"
    ></food-list>

  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
    new Food("Pizza", "Extra Cheese and pepperoni.", 600),
    new Food("Banana", "Post-lunch snack", 90),
    new Food("Soda", "Post-lunch snack", 150)
  ];

  addFood(foodToAdd: Food) {
    this.masterFoodList.push(foodToAdd);
  }
}
