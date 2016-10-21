import { Component, Input, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'stat-summary',
  template: `
    <div class="row">
      <div class="col-md-4" *ngIf="childTotalCalories">{{ childTotalCalories }}</div>
    </div>
  `
})
export class StatSummaryComponent {
  @Input() childTotalCalories: number;


}
