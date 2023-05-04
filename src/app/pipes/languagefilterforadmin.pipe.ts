import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languagefilterforadmin'
})
export class LanguagefilterforadminPipe implements PipeTransform {

  transform(dramasList: any, language: any): any {
    if(language=="View all"){
      return dramasList;
    }
    return dramasList.filter((drama:any)=>drama.Language==language);
  }

}
