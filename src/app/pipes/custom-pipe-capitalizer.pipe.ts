import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipeCapitalizer',
  standalone: true
})
export class CustomPipeCapitalizerPipe implements PipeTransform {

  transform(value: string): string {


    return value = value.charAt(0).toUpperCase() + value.slice(1);
  }

}
