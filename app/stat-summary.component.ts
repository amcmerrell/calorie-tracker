import { Component, Input, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'stat-summary',
  template: `
    <div class="row">
      <div class="col-md-3 stat-display">
        <h2>Total Days Logged</h2>
        <h2 class="stat-display">{{ childTotalDays }}</h2>
      </div>
      <div class="col-md-3 stat-display">
        <h2>Calories Today</h2>
        <h2>{{ childCaloriesToday }}</h2>
      </div>
      <div class="col-md-3 stat-display">
        <h2>Avg. Calories per Food</h2>
        <h2>{{ childAvgFoodCalories.toFixed(0) }}</h2>
      </div>
      <div class="col-md-3 stat-display">
        <h2>Avg. Calories per Day</h2>
        <h2>{{ childAvgCalories.toFixed(0) }}</h2>
      </div>
    </div>
  `
})
export class StatSummaryComponent {
  @Input() childTotalDays: number;
  @Input() childCaloriesToday: number;
  @Input() childAvgCalories: number;
  @Input() childAvgFoodCalories: number;
}
