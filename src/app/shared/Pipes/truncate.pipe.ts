import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(text: any, value: number): any {
    if (text != undefined && text.length > value) {
      return text.slice(0, value) + '..';
    } else {
      return text;
    }
  }
}
