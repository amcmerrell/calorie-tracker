import { Component, Input, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'stat-summary',
  template: `
    <div class="row">
      <div class="col-md-3 stat-display">
        <div class="well">
          <h2>Total Days Logged</h2>
          <h3>{{ childTotalDays }}</h3>
        </div>
      </div>
      <div class="col-md-3 stat-display">
        <div class="well">
          <h2>Calories Today</h2>
          <h3>{{ childCaloriesToday }}</h3>
        </div>
      </div>
      <div class="col-md-3 stat-display">
        <div class="well">
          <h2>Avg. Calories per Food</h2>
          <h3>{{ childAvgFoodCalories.toFixed(0) }}</h3>
        </div>
      </div>
      <div class="col-md-3 stat-display">
        <div class="well">
          <h2>Avg. Calories per Day</h2>
          <h3>{{ childAvgCalories.toFixed(0) }}</h3>
        </div>
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
