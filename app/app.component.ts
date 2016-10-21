import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Calorie Tracker</h1>
    <food-list
      [childFoodList]="masterFoodList"
    ></food-list>
  </div>
  `
})

export class AppComponent {
  public masterFoodList = [];
}
