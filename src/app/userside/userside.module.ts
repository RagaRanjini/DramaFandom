import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersideRoutingModule } from './userside-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { KdramasComponent } from './home/kdramas/kdramas.component';
import { CdramasComponent } from './home/cdramas/cdramas.component';
import { JdramasComponent } from './home/jdramas/jdramas.component';
import { LanguagefilterPipe } from '../pipes/languagefilter.pipe';
import { GenrefilterPipe } from '../pipes/genrefilter.pipe';
import { YearfilterPipe } from '../pipes/yearfilter.pipe';
import { SearchbarPipe } from '../pipes/searchbar.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    KdramasComponent,
    CdramasComponent,
    JdramasComponent,
    LanguagefilterPipe,
    GenrefilterPipe,
    YearfilterPipe,
    SearchbarPipe
  ],
  imports: [
    CommonModule,
    UsersideRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersideModule { }
