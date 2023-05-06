import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DramasGetServicesService } from 'src/app/services/dramas-get-services.service';
import { EditbuzzComponent } from './editbuzz/editbuzz.component';
import { DeletebuzzComponent } from './deletebuzz/deletebuzz.component';

@Component({
  selector: 'app-adminlatestbuzz',
  templateUrl: './adminlatestbuzz.component.html',
  styleUrls: ['./adminlatestbuzz.component.css']
})
export class AdminlatestbuzzComponent {
  buzz:any;
 constructor(private gs:DramasGetServicesService,public dialog: MatDialog){
  this.gs.getLatestBuzz().subscribe({
    next:(data:any)=>this.buzz=data,
    error:()=>this.buzz=[]
  })
 }
 editform(id:any){
  const editform=this.dialog.open(EditbuzzComponent,{data:{thisid:id}})
  // console.log(id)
  editform.afterClosed().subscribe(buzzdata=>{
    if(buzzdata){
      this.buzz=this.buzz.map((data:any)=>{
        if(data.id==id){
          return buzzdata;
        }
        return data;
      })
    }
  })
}
delete(id:any){
  const deletedialog=this.dialog.open(DeletebuzzComponent,{data:{thisid:id}});
  deletedialog.afterClosed().subscribe(
    {
      next:()=>{
        this.gs.getLatestBuzz().subscribe({
          next:(data:any)=>this.buzz=data,
          error:()=>this.buzz=[]
        })
      },
      error:()=>alert("Error occured !")
    }
  )
}

}
