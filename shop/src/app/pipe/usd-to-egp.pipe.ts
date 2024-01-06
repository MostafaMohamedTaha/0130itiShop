import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToEgp'
})
export class UsdToEgpPipe implements PipeTransform {

  transform(value: number): number {
    return value*55;
  }

}
