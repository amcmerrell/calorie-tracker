import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Calorie Tracker</h1>
    <stat-summary
      [childTotalCalories]="totalCalories"
    ></stat-summary>
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
    new Food("Pizza", "Extra Cheese and pepperoni.", 600, new Date(1477033200000)),
    new Food("Banana", "Post-lunch snack", 90, new Date(1477033200000)),
    new Food("Soda", "Post-lunch snack", 150, new Date(1477033200000))
  ];

  public selectedFood: Food = null;
  public totalCalories: number = 0;
  public totalDays: number = 0;

  addFood(foodToAdd: Food) {
    this.masterFoodList.push(foodToAdd);
    this.sumCalories(this.masterFoodList);
    this.sumDays(this.masterFoodList);
  }

  setSelectedFood(foodToEdit: Food) {
    this.selectedFood = foodToEdit;
  }

  finishedEditing() {
    this.selectedFood = null;
  }

  sumCalories(foodList: Food[]) {
    for (let i = 0; i < foodList.length; i++) {
      this.totalCalories += foodList[i].calories;
    }
    return this.totalCalories;
  }

  sumDays(foodList: Food[]) {
    var tempFoodList: Food [] = foodList;
    for (let i = 0; i < foodList.length; i++) {
      if (foodList.indexOf(foodList[i].logDate.toString()) == foodList.lastIndexOf(foodList[i].logDate.toString())) {
        this.totalDays++
      }
    }
    console.log(this.totalDays);
    return this.totalDays;
  }
}
