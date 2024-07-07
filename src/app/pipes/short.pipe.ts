import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
  standalone: true,
})
export class ShortPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 200) {
      return value.slice(0, 208) + '...';
    }
    return value;
  }
}
