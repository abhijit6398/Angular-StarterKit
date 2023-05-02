import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {
  transform(value: string): string {
    const parts = value.split(' ');
    return parts.map(part => part.charAt(0)).join(' ');
  }
}