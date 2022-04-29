import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grades'
})
export class GradesPipe implements PipeTransform {
output:string="";
  transform(input: number, ): string {
    if(input==1){
      this.output="Outstanding";
    }
    else if (input==2){
      this.output="Excellent";
    }
    else if (input==3){
      this.output="Good";
    }
    else if (input==4){
      this.output="Average";
    }
    return this.output;
  }

}
