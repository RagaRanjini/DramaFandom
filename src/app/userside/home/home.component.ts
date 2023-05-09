import { Component } from '@angular/core';
import { NavyBlueGradient, IPurpleYou, AccentShade} from '../usersideStyles';
import { Router,ActivatedRoute } from '@angular/router';
import { DramasGetServicesService } from 'src/app/services/dramas-get-services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router, private ar:ActivatedRoute,private gs:DramasGetServicesService){}
  // theme operations
  theme:any=NavyBlueGradient;
  themes:any=["NavyBlueGradient","IPurpleYou","AccentShade"]
themesMap: any = {
  'NavyBlueGradient': NavyBlueGradient,
  'IPurpleYou': IPurpleYou,
  'AccentShade': AccentShade
};
onChangeTheme(theme: any) {
  this.theme = this.themesMap[theme];
}
//home page - dramas component - common
home(){
  this.router.navigate(['dramas'],{relativeTo:this.ar})
}
//kdramas component
changeKdramas(){
  this.router.navigate(['kdramas'],{relativeTo:this.ar})
}
//cdramas component
changeCdramas(){
  this.router.navigate(['cdramas'],{relativeTo:this.ar})
}
//jdramas component
changeJdramas(){
  this.router.navigate(['jdramas'],{relativeTo:this.ar})
}
//topchart component - common
changeTopchart(){
  this.router.navigate(['topchart'],{relativeTo:this.ar})
}
notifications(){
  // console.log("notify")
  this.router.navigate(['notifications'],{relativeTo:this.ar})
}

logout(){
  sessionStorage.clear();
  location.reload();
}
}