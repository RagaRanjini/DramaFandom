import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminsideRoutingModule } from './adminside-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NewdramaComponent } from './adminhome/newdrama/newdrama.component';
import { NewbuzzComponent } from './adminhome/newbuzz/newbuzz.component';
import { ExistingdramasComponent } from './adminhome/existingdramas/existingdramas.component';
import { SearchbarforadminPipe } from '../pipes/searchbarforadmin.pipe';
import { LanguagefilterforadminPipe } from '../pipes/languagefilterforadmin.pipe';
import { EditComponent } from './adminhome/existingdramas/edit/edit.component';
import { DeleteComponent } from './adminhome/existingdramas/delete/delete.component';



@NgModule({
  declarations: [
    AdminhomeComponent,
    NewdramaComponent,
    NewbuzzComponent,
    ExistingdramasComponent,
    SearchbarforadminPipe,
    LanguagefilterforadminPipe,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AdminsideRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminsideModule { }
