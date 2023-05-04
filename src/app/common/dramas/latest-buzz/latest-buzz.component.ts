import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-latest-buzz',
  templateUrl: './latest-buzz.component.html',
  styleUrls: ['./latest-buzz.component.css']
})
export class LatestBuzzComponent {
  @Input() latestBuzz:any;
//getting latestBuzz data from parent component
}
