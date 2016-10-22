import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container well" id="main-well">
    <h1>Calorie Tracker</h1>
    <stat-summary
      [childCaloriesToday]="caloriesToday"
      [childAvgCalories]="avgCalories"
      [childAvgFoodCalories]="avgFoodCalories"
      [childTotalDays]="totalDays"
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
  public avgFoodCalories: number = 0;
  public avgCalories: number = 0;

  addFood(foodToAdd: Food) {
    this.masterFoodList.push(foodToAdd);
    this.checkStats();
  }

  setSelectedFood(foodToEdit: Food) {
    this.selectedFood = foodToEdit;
  }

  finishedEditing() {
    this.selectedFood.calories = Number(this.selectedFood.calories);
    this.checkStats();
    this.selectedFood = null;
  }

  sumDailyCalories(foodList: Food[], today: Date) {
    var tempCalTotal: number = 0;
    for (let i = 0; i < foodList.length; i++) {
      if (today.toDateString() === foodList[i].logDate.toDateString()) {
        tempCalTotal += foodList[i].calories;
      }
    }
    this.caloriesToday = tempCalTotal;
  }

  sumTotalCalories(foodList: Food[]) {
    var tempTotalCalories: number = 0;
    for (let i = 0; i < foodList.length; i++) {
      tempTotalCalories += foodList[i].calories;
    }
    this.totalCalories = tempTotalCalories;
  }

  sumDays(foodList: Food[]) {
    var tempDayCount: number = 0;
    var tempFoodList: string[] = [];
    for (let i = 0; i < foodList.length; i++) {
      tempFoodList.push((foodList[i].logDate).toString());
    }
    for (let i = 0; i < tempFoodList.length; i++) {
      if (i === tempFoodList.lastIndexOf(tempFoodList[i])) {
        tempDayCount++;
      }
    }
    this.totalDays = tempDayCount;
  }

  avgCalsPerDay() {
    this.avgCalories = this.totalCalories / this.totalDays;
  }

  checkStats() {
    this.sumDailyCalories(this.masterFoodList, new Date());
    this.sumTotalCalories(this.masterFoodList);
    this.sumDays(this.masterFoodList);
    this.avgCalsPerDay();
    this.avgFoodCalories = this.totalCalories / this.masterFoodList.length;
  }
}
