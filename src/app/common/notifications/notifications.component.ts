import { Component } from '@angular/core';
import { DramasGetServicesService } from 'src/app/services/dramas-get-services.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  newReleases:any;
  constructor(private gs:DramasGetServicesService){
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
}
