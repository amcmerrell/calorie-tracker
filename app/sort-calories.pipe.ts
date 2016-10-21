import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: 'sortCalories',
  pure: false
})
export class SortCaloriesPipe implements PipeTransform {
  transform(input: Food[], calorieRange) {
    var output: Food[] = [];
    if (calorieRange === "low") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
    } else if (calorieRange === "high") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
    } else {
      return input;
    }
    return output;
  }
}
