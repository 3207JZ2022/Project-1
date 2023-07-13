import { Pipe, PipeTransform } from '@angular/core';
// return first a substring based on the first occurence of non numeric char
@Pipe({name: 'getNumber'})
export class GetNumberPipe implements PipeTransform {
  transform(value: string): string {
    let i =0
    for(; i < value.length; i++) {
        if(value.charAt(i)<'0' || value.charAt(i)>'9') break;
    }
    return value.substring(0, i);

  }
}