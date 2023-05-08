import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DramasGetServicesService } from 'src/app/services/dramas-get-services.service';
import { EditingService } from 'src/app/services/editing.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
details:any;
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
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private gs:DramasGetServicesService,private es:EditingService,private router:Router,private ar:ActivatedRoute, public dialogref: MatDialogRef<EditComponent>) {
    this.gs.getView(data.thisid).subscribe(
      {
        next:(drama:any)=>{
          this.details=drama;
          this.Title=this.details.Title;
          this.Language=this.details.Language;
          this.Genre=this.details.Genre;
          this.Image=this.details.Image;
          this.Featuring=this.details.Featuring;
          this.Released_Year=this.details.Released_Year;
          this.Type=this.details.Type;
          this.Seasons=this.details.Seasons;
          this.Likes=this.details.Likes;
          this.Plot=this.details.Plot;
        },
        error:()=>this.details=[]
      }
    )
  }

  id:number=this.data.thisid

  editDrama(){
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
      this.es.editingDrama(this.id,data).subscribe(
        {
          next:(data:any)=>{
            this.Title="";
            this.Language="",
            this.Genre="",
            this.Image="",
            this.Featuring="",
            this.Plot="",
            this.Released_Year=0;
            this.Seasons="";
            this.dialogref.close(data);
          },
          error:()=>alert("Some error in editing drama")
        }
      )
    }
    
  }
  }

