import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbar'
})
export class SearchbarPipe implements PipeTransform {

  transform(dramas: any, selectedOption:any, isSearchBarEmpty:boolean): any {
    if(isSearchBarEmpty || selectedOption==""||selectedOption=="Show all"){
      return dramas;
    }
    return dramas.filter((drama:any)=>drama.Title==selectedOption)
  }

}
