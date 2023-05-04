import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbarforadmin'
})
export class SearchbarforadminPipe implements PipeTransform {

  transform(dramas: any, selectedOption:any): any {
    if(selectedOption==""||selectedOption=="Show all"){
      return dramas;
    }
    return dramas.filter((drama:any)=>drama.Title==selectedOption)
  }

}
