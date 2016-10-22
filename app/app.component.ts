import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container well" id="main-well">
    <h1>Calorie Tracker</h1>
    <stat-summary
      [childTotalCalories]="totalCalories"
    ></stat-summary>
    <div class="row">
      <div class="col-md-8">
        <edit-food
          [childSelectedFood]="selectedFood"
          (doneClickedSender)="finishedEditing()"
        ></edit-food>
        <new-food
          (newFoodSender)="addFood($event)"
        ></new-food>
        </div>
      <div class="col-md-4">
        <food-list
          [childFoodList]="masterFoodList"
          (editClickSender)="setSelectedFood($event)"
        ></food-list>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [];

  public selectedFood: Food = null;
  public totalCalories: number = 0;
  public caloriesToday: number = 0;
  public totalDays: number = 0;
  public avgCalories: number = 0;

  addFood(foodToAdd: Food) {
    this.masterFoodList.push(foodToAdd);
    this.sumCalories(this.masterFoodList, new Date());
    console.log(this.caloriesToday);
    this.sumCalories(this.masterFoodList);
    this.sumDays(this.masterFoodList);
    this.avgCalsPerDay();
  }

  setSelectedFood(foodToEdit: Food) {
    this.selectedFood = foodToEdit;
  }

  finishedEditing() {
    this.selectedFood = null;
  }

  sumCalories(foodList: Food[], today?: Date) {
    if (today) {
      var tempCalTotal: number = 0;
      for (let i = 0; i < foodList.length; i++) {
        if (today.toDateString() === foodList[i].logDate.toDateString()) {
          tempCalTotal += foodList[i].calories;
        }
      }
      this.caloriesToday = tempCalTotal;
    } else {
      for (let i = 0; i < foodList.length; i++) {
        this.totalCalories += foodList[i].calories;
      }
      return this.totalCalories;
    }
  }

  sumDays(foodList: Food[]) {
    var tempFoodList: string[] = [];
    for (let i = 0; i < foodList.length; i++) {
      tempFoodList.push((foodList[i].logDate).toString());
    }
    for (let i = 0; i < tempFoodList.length; i++) {
      if (tempFoodList.indexOf(tempFoodList[i]) == tempFoodList.lastIndexOf(tempFoodList[i])) {
        this.totalDays++;
      }
    }
    return this.totalDays;
  }

  avgCalsPerDay() {
    this.avgCalories = this.totalCalories / this.totalDays;
  }
}
