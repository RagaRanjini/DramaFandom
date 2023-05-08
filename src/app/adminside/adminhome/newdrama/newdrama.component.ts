import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
constructor(private pd:PostServicesService,public dialogref: MatDialogRef<NewdramaComponent>,private router:Router,private ar:ActivatedRoute){}

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
          this.Title="";
          this.Language="",
          this.Genre="",
          this.Image="",
          this.Featuring="",
          this.Plot="",
          this.Released_Year=0,
          this.Seasons="",
          this.dialogref.close();
        },
        error:()=>alert("Some error in posting new drama")
      }
    )
  }
  
}
}
