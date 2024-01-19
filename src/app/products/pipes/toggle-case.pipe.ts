import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
      if( args[0] ) {return value.toUpperCase()};

      return value.toLowerCase();
  }
}
