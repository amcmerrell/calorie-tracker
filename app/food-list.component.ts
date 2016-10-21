import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <h2>Food Log</h2>
    <select (change)="onCalorieChange($event.target.value)" class="filter form-control">
      <option value="all">Show All Foods</option>
      <option value="low">Show Low Calorie Foods</option>
      <option value="high">Show High Calorie Foods</option>
    </select>
    <div *ngFor="let currentFood of childFoodList | sortCalories:calorieRange">
      <h3> {{ currentFood.name }} </h3>
      <h5><strong>Description:</strong> {{ currentFood.description }}</h5>
      <h5><strong>Calories:</strong> {{ currentFood.calories }}</h5>
      <h5><strong>Date:</strong> {{ currentFood.logDate.toLocaleDateString() }}</h5>
      <button class="btn btn-warning" (click)="onEditClick(currentFood)">Edit</button>
    </div>
  `
})
export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() editClickSender = new EventEmitter();

  public calorieRange: string = "all";

  onCalorieChange(selectedCalorieRange: string) {
    this.calorieRange = selectedCalorieRange;
  }

  onEditClick(foodToEdit: Food) {
    this.editClickSender.emit(foodToEdit);
  }
}
