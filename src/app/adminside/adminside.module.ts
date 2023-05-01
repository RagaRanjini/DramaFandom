import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { AdminsideRoutingModule } from './adminside-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';



@NgModule({
  declarations: [
    AdminhomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AdminsideRoutingModule
  ]
})
export class AdminsideModule { }
