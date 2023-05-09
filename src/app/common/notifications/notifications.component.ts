import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DramasGetServicesService } from 'src/app/services/dramas-get-services.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  newReleases:any;
  constructor(private gs:DramasGetServicesService, private router:Router){
    this.gs.getDramas().subscribe(
      {
        next:(data:any)=>{
          this.newReleases=data.filter((item:any)=>item.Type=="new")
          // console.log(this.newReleases)
        },
        error:()=>alert("Error in showing new releases !")
      }
    )
  }
  // gotoHome(){
  //   let user= sessionStorage.getItem('type');
  //   if(user=="user"){
  //     this.router.navigate(['userside/home'])
  //   }else{
  //     this.router.navigate(['adminside/home'])
  //   }
  // }
}
