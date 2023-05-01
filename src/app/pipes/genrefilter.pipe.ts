import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genrefilter'
})
export class GenrefilterPipe implements PipeTransform {

  transform(dramas:any, chosengenre:any): any {
    if(chosengenre=="View all"){
      return dramas;
    }
    return dramas.filter((drama:any)=>drama.Genre==chosengenre)
  }

}
