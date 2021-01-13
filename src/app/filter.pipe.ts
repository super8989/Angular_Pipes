import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pipe is recalculated with every data change **may cause performance issues
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      // if (item[propName] === filterString) {
      if (item[propName].includes(filterString)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
