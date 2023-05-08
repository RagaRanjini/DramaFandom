import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-newreleases',
  templateUrl: './newreleases.component.html',
  styleUrls: ['./newreleases.component.css']
})
export class NewreleasesComponent {
@Input() data:any;
panelOpenState = false;
}
