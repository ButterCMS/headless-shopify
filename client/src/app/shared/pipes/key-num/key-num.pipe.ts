import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyNum',
})
export class KeyNumPipe implements PipeTransform {
  transform(value: object): number {
    return Object.keys(value).length;
  }
}
