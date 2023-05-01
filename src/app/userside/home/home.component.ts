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
home(){
  this.router.navigate(['dramas'],{relativeTo:this.ar})
}
changeKdramas(){
  this.router.navigate(['kdramas'],{relativeTo:this.ar})
}
changeCdramas(){
  this.router.navigate(['cdramas'],{relativeTo:this.ar})
}
changeJdramas(){
  this.router.navigate(['jdramas'],{relativeTo:this.ar})
}
}