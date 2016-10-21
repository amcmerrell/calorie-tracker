import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template:`
    <h2>Add a new food</h2>
    <form>
      <div class="form-group">
        <label>Enter a new food name:</label>
        <input class="form-control" type="text" #foodName>
      </div>
      <div class="form-group">
        <label>Enter a brief description:</label>
        <input class="form-control" type="text" #foodDescription>
      </div>
      <div class="form-group">
        <label>Enter the total calories for the food:</label>
        <input class="form-control" type="number" #foodCalories>
      </div>
      <button type="button" class="btn btn-primary"
        (click)="
          addClicked(foodName.value, foodDescription.value, foodCalories.value);
          foodName.value='';
          foodDescription.value='';
          foodCalories.value='';
        "
      >Add Food</button>
    </form>
  `
})
export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  addClicked(name: string, description: string, calories: number) {
    if (name && description && calories) {
      var caloriesNum: number = Number(calories);
      var newFoodToAdd = new Food(name, description, caloriesNum);
      console.log(newFoodToAdd);
      this.newFoodSender.emit(newFoodToAdd);
    } else {
      alert("Please fill out all fields before submitting.")
    }
  }
}
