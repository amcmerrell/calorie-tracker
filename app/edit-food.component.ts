import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template:`
    <div *ngIf="childSelectedFood">
      <h2>Edit Food</h2>
      <div class="form-group">
        <label>Edit name:</label>
        <input class="form-control" [(ngModel)]="childSelectedFood.name">
      </div>
      <div class="form-group">
        <label>Edit description:</label>
        <input class="form-control" [(ngModel)]="childSelectedFood.description">
      </div>
      <div class="form-group">
        <label>Edit calories:</label>
        <input type="number" class="form-control" [(ngModel)]="childSelectedFood.calories">
      </div>
      <button type="button" class="btn btn-primary" (click)="doneClicked()">Done</button>
    </div>
  `
})
export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
