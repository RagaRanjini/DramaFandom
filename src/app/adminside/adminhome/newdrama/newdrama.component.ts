import { Component} from '@angular/core';
import { PostServicesService } from 'src/app/services/post-services.service';

@Component({
  selector: 'app-newdrama',
  templateUrl: './newdrama.component.html',
  styleUrls: ['./newdrama.component.css']
})
export class NewdramaComponent {

Title:string="";
Language:string="";
Genre:string="";
Image:string="";
Featuring:string="";
Released_Year:number=0;
Type:string="";
Seasons:string="";
Likes:number=0;
Plot:string="";
constructor(private pd:PostServicesService){}
ktitles(){
  let data={Title: this.Title}
  this.pd.postingKDrama(data).subscribe(
    {
      next:(data:any)=>{
        console.log(data)
      },
      error:()=>{}
    }
  )
}
ctitles(){
  let data={Title: this.Title}
  this.pd.postingCDrama(data).subscribe(
    {
      next:(data:any)=>{
        console.log(data)
      },
      error:()=>{}
    }
  )
}
jtitles(){
  let data={Title: this.Title}
  this.pd.postingJDrama(data).subscribe(
    {
      next:(data:any)=>{
        console.log(data)
      },
      error:()=>{}
    }
  )
}
postDrama(){
  // console.log(this.Title);
  // console.log(this.Language);
  if(this.Title==""||this.Language==""||this.Genre==""||this.Released_Year==0||this.Featuring==""||this.Seasons==""||this.Image==""||this.Plot==""||this.Type==""){
    alert("Empty fields cannot be taken !")
  }else{
    let data={
      Title: this.Title,
      Language: this.Language,
      Genre: this.Genre,
      Image: this.Image,
      Featuring: this.Featuring,
      Released_Year: this.Released_Year,
      Type: this.Type,
      Seasons: this.Seasons,
      Likes: this.Likes,
      Plot: this.Plot
    }
    this.pd.postingDrama(data).subscribe(
      {
        next:(data:any)=>{
          alert("Drama has been posted successfully !");
          if(this.Language=="Korean"){
            this.ktitles()
          }
          if(this.Language=="Chinese"){
            this.ctitles()
          }
          if(this.Language=="Japanese"){
            this.jtitles()
          }
          this.Title="";
          this.Language="",
          this.Genre="",
          this.Image="",
          this.Featuring="",
          this.Plot="",
          this.Released_Year=0;
          this.Seasons=""
        },
        error:()=>alert("Some error in posting new drama")
      }
    )
  }
  
}
}
