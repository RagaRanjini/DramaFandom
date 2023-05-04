import { Component,OnInit } from '@angular/core';
import { DramasGetServicesService } from 'src/app/services/dramas-get-services.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-jdramas',
  templateUrl: './jdramas.component.html',
  styleUrls: ['./jdramas.component.css']
})
export class JdramasComponent implements OnInit{
  //autocomplete feature
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
  //binding the selected value from autocomplete field everytime
  isSearchBarEmpty:boolean=true;
  selectedOption:any="";
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedOption = event.option.value;
    this.isSearchBarEmpty=false;
  }
  clearSearchBar() {
    this.isSearchBarEmpty = true; // set flag to true when search bar is empty
    this.selectedOption = ""; // clear selected option
  }
  //options for genre filter --pipe
  language:string="Japanese"
  dramasList:any;
  chosengenre:any="View all";
  genres:any=[
    "View all",
    "Teen Drama",
    "Romance",
    "Thriller",
    "Fantasy",
    "Comedy"
  ]
  //slider --initial values
  value1:number=2005;
  value2:number=2023;
  constructor(private gs:DramasGetServicesService,private http:HttpClient){
    //getting all dramas, storing japanese dramas in a constant and mapping only titles for search bar
    this.gs.getDramas().subscribe(
      {
        next:(data:any)=>{
          this.dramasList=data;
          const JapaneseDramas=data.filter((item:any)=>item.Language==="Japanese")
          this.options=JapaneseDramas.map((item:any)=>item.Title)
        },
        error:()=>this.dramasList=[]
      }
    )
  }
  //updating likes for japanese dramas
  updateLikes(id:any,prevLikes:any){
    const currLikes=prevLikes+1;
    const data={Likes: currLikes}
    this.http.patch("http://localhost:4500/Dramas/"+id,data).subscribe(
      response=>{
        console.log("success");
        const dramaIndex = this.dramasList.findIndex((d:any) => d.id === id);
      if (dramaIndex !== -1) {
        this.dramasList[dramaIndex].Likes = currLikes;
      }
      }
    )
  }
}
