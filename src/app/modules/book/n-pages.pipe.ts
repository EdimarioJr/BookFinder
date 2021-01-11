import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nPages',
})
export class NPagesPipe implements PipeTransform {
  transform(value: number): number {
    if (value % 10) {
      return Math.floor(value / 10) + 1;
    }
    return value / 10;
  }
}
