import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DramaFandom';
  constructor(private as:AuthenticationService,private router:Router){}
  ngAfterViewInit(){
    if(!this.as.loginstatus()){
      this.router.navigate(['authentication'])
    }else{
      if(this.as.usertype=="admin"){
        this.router.navigate(['adminside/home'])
      }else{
        this.router.navigate(['userside/home'])
      }
    }
  }
}
