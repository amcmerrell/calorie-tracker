import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <div class="row">
      <h2>Food Log</h2>
      <div class="form-group col-md-3">
        <select (change)="onCalorieChange($event.target.value)" class="filter form-control">
          <option value="all">Show All Foods</option>
          <option value="low">Show Low Calorie Foods</option>
          <option value="high">Show High Calorie Foods</option>
        </select>
      </div>
      <div class="col-md-3" *ngFor="let currentFood of childFoodList">
        <h3> {{ currentFood.name }} </h3>
        <h5><strong>Description:</strong> {{ currentFood.description }}</h5>
        <h5><strong>Calories:</strong> {{ currentFood.calories }}</h5>
        <button class="btn btn-warning" (click)="onEditClick(currentFood)">Edit</button>
      </div>
    </div>
  `
})
export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() editClickSender = new EventEmitter();
  onEditClick(foodToEdit: Food) {
    this.editClickSender.emit(foodToEdit);
  }
}
