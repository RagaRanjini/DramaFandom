import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { DramasComponent } from '../common/dramas/dramas.component';

const routes: Routes = [
  {
  path:"home",component: AdminhomeComponent,
  children: [
    {
      path: "dramas",
      component: DramasComponent
    }
  ]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsideRoutingModule { }
