import { Component } from '@angular/core';
import { slideshow } from '../DramasPage';
import { DramasGetServicesService } from 'src/app/services/dramas-get-services.service';

@Component({
  selector: 'app-dramas',
  templateUrl: './dramas.component.html',
  styleUrls: ['./dramas.component.css']
})
export class DramasComponent{
  //from dramaspage, importing styles
  styles=slideshow
  //image urls for slidedhow
  imageUrls: string[] = ['http://localhost/DramaFandom/slide1.webp', 'http://localhost/DramaFandom/slide2.webp', 'http://localhost/DramaFandom/slide3.jpg','http://localhost/DramaFandom/slide4.png','http://localhost/DramaFandom/slide5.webp'];
  currentImageIndex: number = 0;
//currently first image for slideshow and iterating the array and moving the images for an interval of 2000ms
  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.imageUrls.length) {
        this.currentImageIndex = 0;
      }
    }, 2000);
  }

  //get latestBuzz from Database ---parent component
  latestBuzzList:any;
  constructor(private gs:DramasGetServicesService){
    this.gs.getLatestBuzz().subscribe(
      {
        next:(data:any)=>{
          this.latestBuzzList=data;
        },
        error:()=>this.latestBuzzList=[]
      }
    )
  }
  //get username for alert
  getUsername(){
    return sessionStorage.getItem('username');
  }
}
