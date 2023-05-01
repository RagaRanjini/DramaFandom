import { Component } from '@angular/core';
import { DramasGetServicesService } from 'src/app/services/dramas-get-services.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PostServicesService } from 'src/app/services/post-services.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  currentid:any;
  Form:any;
  reviews:any;
constructor(private fb:FormBuilder,private ar:ActivatedRoute,private gs:DramasGetServicesService,private ps:PostServicesService){
  this.Form = this.fb.group({
    message:['',[Validators.required,Validators.minLength(15)]]
  });


  this.ar.params.subscribe({
    next:(params)=>{
      this.currentid=params['id'],
      this.getData()
    },
    error:()=>this.currentid=0
  })

  this.ps.gettingReview().subscribe(
    {
      next:(data:any)=>this.reviews=data,
      error:()=>this.reviews=[]
    }
  )
}

details:any;
getData(){
  this.gs.getView(this.currentid).subscribe(
    {
      next:(data:any)=>this.details=data,
      error:()=>this.details=[]
    }
  )
}

postReview(){
  let data={
    product: this.currentid,
    message: this.Form.value.message
  }
  this.ps.postingReview(data).subscribe(
    {
      next: (data:any)=>{
        alert('We got your review. Thanks !')
      },
      error:()=>alert('Your review is not posted --Some error.')
    }
  )
}

}
