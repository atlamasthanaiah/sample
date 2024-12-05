import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emp'
})
export class EmpPipe implements PipeTransform {

  transform(value: string): string {
    if (value.toLowerCase() === 'male') {
      return 'Mr:';
    } 
    else {
      return 'Miss:';
    }
  }
}
