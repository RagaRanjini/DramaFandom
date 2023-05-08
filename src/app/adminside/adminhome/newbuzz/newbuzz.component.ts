import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostServicesService } from 'src/app/services/post-services.service';

@Component({
  selector: 'app-newbuzz',
  templateUrl: './newbuzz.component.html',
  styleUrls: ['./newbuzz.component.css']
})
export class NewbuzzComponent {
  news:string="";
  image:string="";
  constructor(private ps:PostServicesService,public dialog:MatDialogRef<NewbuzzComponent>){}
postBuzz(){
  if(this.news==""||this.image==""){
    alert("Empty data cannot be posted !")
  }else{
    let data={
      news: this.news,
      image: this.image
    }
    this.ps.postingBuzz(data).subscribe(
      {
        next:(data:any)=>{
          this.news="";
          this.image="";
          this.dialog.close();
        },
        error:()=>alert("Some error occured --try later.")
      }
    )
  }
  

}
}
