import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'decimalPlace2'})
export class DecimalPlacePipe implements PipeTransform {
  transform(value: number): string {
    let i =0
    let temp = value.toString();
    let index=-1;
    for(; i < temp.length; i++) {
        if(temp.charAt(i)==='.') {
            index=i;
            break;
        }
    }
    if(index===-1){
        return (temp+'.00')
    }else if(temp.length-1-index===1){
        return (temp+'0')
    }
    return (temp.substring(0,index+3));

  }
}