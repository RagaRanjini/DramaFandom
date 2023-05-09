import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewdramaComponent } from './newdrama/newdrama.component';
import { MatDialog } from '@angular/material/dialog';
import { NewbuzzComponent } from './newbuzz/newbuzz.component';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
constructor(private router:Router,private ar:ActivatedRoute,public dialog: MatDialog){}
home(){
  this.router.navigate(['dramas'],{relativeTo:this.ar})
}
latestBuzz(){
  this.router.navigate(['latestbuzz'],{relativeTo:this.ar})
}
existingdramas(){
  this.router.navigate(['existingDramas'],{relativeTo:this.ar})
}
postNewDrama(){
  this.dialog.open(NewdramaComponent);
}
postNewBuzz(){
  this.dialog.open(NewbuzzComponent)
}
//topchart component - common
changeTopchart(){
  this.router.navigate(['topchart'],{relativeTo:this.ar})
}
notifications(){
  this.router.navigate(['notifications'],{relativeTo:this.ar})
}
logout(){
  sessionStorage.clear();
  location.reload();
}
}
