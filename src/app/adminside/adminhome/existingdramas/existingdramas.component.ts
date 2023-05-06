import { Component,OnInit } from '@angular/core';
import { DramasGetServicesService } from 'src/app/services/dramas-get-services.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-existingdramas',
  templateUrl: './existingdramas.component.html',
  styleUrls: ['./existingdramas.component.css']
})
export class ExistingdramasComponent implements OnInit {
  language:string="View all";
  //autocomplete - search bar
  myControl = new FormControl('');
  options:string[]=["Show all"];
  filteredOptions: Observable<string[]>=new Observable<string[]>();
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => option.toLowerCase().includes(filterValue));
  }
  //selected option from search bar updating everytime it changes
  selectedOption:any="";
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedOption = event.option.value;
    console.log(this.selectedOption)
  }
  dramas:any;
  constructor(private gs:DramasGetServicesService,public dialog: MatDialog){
    this.gs.getDramas().subscribe(
      {
        next:(data:any)=>{
          this.dramas=data,
          this.options.push(...data.map((item: any) => item.Title));
        },
        error:()=>this.dramas=[]
      }
      )
  }
  editform(id:any){
    const dialogref=this.dialog.open(EditComponent,{data:{thisid:id}})
    // console.log(id)
    dialogref.afterClosed().subscribe(editedData => {
      console.log("closed")
      if (editedData) {
        // Update the dramas array with the edited data
        this.dramas = this.dramas.map((data:any) => {
          if(data.id == id){
            return editedData;
          }
          return data;
        });
      }
    });
  }
  delete(id:any,Title:string){
    const deleteDialog=this.dialog.open(DeleteComponent,{data:{thisid:id,thisTitle:Title}})
    deleteDialog.afterClosed().subscribe(
      {
        next:()=>{
          this.gs.getDramas().subscribe(
            {
              next:(data:any)=>{
                this.dramas=data,
                this.options.push(...data.map((item: any) => item.Title));
              },
              error:()=>this.dramas=[]
            }
            )
        },
        error:()=>alert("Error occured !")
      }
    )
  }

}
