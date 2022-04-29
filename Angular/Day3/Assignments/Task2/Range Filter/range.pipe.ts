import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(inputData:any[], param1:number, param2:number): any[] {

    return inputData.filter(item => item["Salary"] >=param1 && item["Salary"]<=param2);
   
  }

}
