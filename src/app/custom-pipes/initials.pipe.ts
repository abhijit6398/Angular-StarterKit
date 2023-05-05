import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {
  transform(value: string): string {
    return value.split(' ').map(part => part.charAt(0)).join('');
  }
}