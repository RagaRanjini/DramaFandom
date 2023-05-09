import { Component } from '@angular/core';
import { DramasGetServicesService } from 'src/app/services/dramas-get-services.service';
import { PostServicesService } from 'src/app/services/post-services.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
chat:any;
history:any;
thisuser=sessionStorage.getItem('email');
constructor(private ps:PostServicesService,private gs:DramasGetServicesService){
  // this.gs.getChats().subscribe(
  //   {
  //     next:(data:any)=>this.history=data,
  //     error:()=>this.history=[]
  //   }
  // )
  setInterval(()=>{
    this.gs.getChats().subscribe(
      {
        next:(data:any)=>this.history=data,
        error:()=>this.history=[]
      }
    )
  },1000)
}
send(){
  if(this.chat==undefined||this.chat==""){
    alert("Empty message cant be sent")
  }else{
    let data={
      Email: sessionStorage.getItem('email'),
      Username: sessionStorage.getItem('username'),
      Chat: this.chat
    }
    this.ps.postChats(data).subscribe(
      {
        next:(data:any)=>{
          this.chat="";
          this.gs.getChats().subscribe(
            {
              next:(data:any)=>this.history=data,
              error:()=>this.history=[]
            }
          )
        },
        error:()=>{
          alert("Chat not sent")
        }
      }
    )
  }
}
}
