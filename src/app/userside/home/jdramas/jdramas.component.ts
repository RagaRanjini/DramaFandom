import { Component,OnInit } from '@angular/core';
import { DramasGetServicesService } from 'src/app/services/dramas-get-services.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
@Component({
  selector: 'app-jdramas',
  templateUrl: './jdramas.component.html',
  styleUrls: ['./jdramas.component.css']
})
export class JdramasComponent implements OnInit{
  myControl = new FormControl('');
  options: string[] =[];
  filteredOptions: Observable<string[]>=new Observable<string[]>();
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  selectedOption:any="";
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedOption = event.option.value;
    console.log(this.selectedOption)
  }
  language:string="Japanese"
  dramasList:any;
  chosengenre:any="View all";
  genres:any=[
    "View all",
    "Teen Drama",
    "Romance",
    "Thriller",
    "Fantasy"
  ]
  value1:number=2005;
  value2:number=2023;
  constructor(private gs:DramasGetServicesService){
    this.gs.getDramas().subscribe(
      {
        next:(data:any)=>{
          this.dramasList=data
        },
        error:()=>this.dramasList=[]
      }
    )
    this.gs.getJapaneseTitles().subscribe(
      {
        next:(data:any)=>this.options=data,
        error:()=>this.options=[]
      }
    )
  }
}
