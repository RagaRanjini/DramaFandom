import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeleteService } from 'src/app/services/delete.service';
@Component({
  selector: 'app-deletebuzz',
  templateUrl: './deletebuzz.component.html',
  styleUrls: ['./deletebuzz.component.css']
})
export class DeletebuzzComponent {
  id:number=this.data.thisid;
constructor(public dialogRef: MatDialogRef<DeletebuzzComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private ds:DeleteService){}
cancelFunction(){
  this.dialogRef.close();
}
deleteBuzz(id:number){
  this.ds.deleteBuzz(id).subscribe(
    {
      next:(data:any)=>{
        this.dialogRef.close();
      },
      error:()=>alert("Deletion failed !")
    }
  )
}
}
