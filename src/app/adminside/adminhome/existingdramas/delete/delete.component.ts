import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeleteService } from 'src/app/services/delete.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  title:any;
  constructor(public dialogRef: MatDialogRef<DeleteComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private ds:DeleteService){
    this.title=this.data.Title;
  }

  cancelFunction(){
    this.dialogRef.close();
  }
  deleteDrama(id:number){
    this.ds.deleteDrama(id).subscribe(
      {
        next:(data:any)=>{
          this.dialogRef.close();
        },
        error:()=>alert("Deletion failed !")
      }
    )
  }
}
