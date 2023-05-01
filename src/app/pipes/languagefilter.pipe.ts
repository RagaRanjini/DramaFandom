import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languagefilter'
})
export class LanguagefilterPipe implements PipeTransform {

  transform(dramasList: any, language: any): any {
    return dramasList.filter((drama:any)=>drama.Language==language);
  }

}
