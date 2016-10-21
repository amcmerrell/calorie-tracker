import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: 'sortDate',
  pure: false
})
export class SortDatePipe implements PipeTransform {
  transform(input: Food[], args) {
    return input;
  }
}
