import { Component ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DramasGetServicesService } from 'src/app/services/dramas-get-services.service';
import { EditingService } from 'src/app/services/editing.service';

@Component({
  selector: 'app-editbuzz',
  templateUrl: './editbuzz.component.html',
  styleUrls: ['./editbuzz.component.css']
})
export class EditbuzzComponent {
  news:string="";
  image:string="";;
  id:number=this.data.thisid;
  currentBuzz:any;
constructor(@Inject(MAT_DIALOG_DATA) public data: any,private gs:DramasGetServicesService,private es:EditingService,public dialogref: MatDialogRef<EditbuzzComponent>){
  this.gs.getLatestBuzzbyId(data.thisid).subscribe(
    {
      next:(thisbuzz:any)=>{
        this.currentBuzz=thisbuzz,
        this.news=this.currentBuzz.news,
        this.image=this.currentBuzz.image
      },
      error:()=>this.currentBuzz=[]
    }
  )
}
editBuzz(){
  if(this.news==""||this.image==""){
    alert("Empty fields cannot be taken")
  }else{
    let buzzdata={
      news: this.news,
      image: this.image
    }
    this.es.editingBuzz(this.id,buzzdata).subscribe(
      {
        next:(buzzdata:any)=>{
          this.news="";
          this.image="";
          this.dialogref.close(buzzdata)
        },
        error:()=>alert("Error in editing --try again!")
      }
    )
  }
}
}
