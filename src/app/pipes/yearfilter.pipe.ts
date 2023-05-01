import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearfilter'
})
export class YearfilterPipe implements PipeTransform {

  transform(dramas:any,value1:number,value2:number): any {
    return dramas.filter((drama:any)=>drama.Released_Year>=value1&&drama.Released_Year<=value2);
  }

}
