import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'review'
})
export class ReviewPipe implements PipeTransform {

  transform(reviews:any,currentid:any):any {
    return reviews.filter((review:any)=>review.product==currentid)
  }

}
