import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { DramasComponent } from '../common/dramas/dramas.component';
import { TopchartComponent } from '../common/topchart/topchart.component';
import { ExistingdramasComponent } from './adminhome/existingdramas/existingdramas.component';
import { EditComponent } from './adminhome/existingdramas/edit/edit.component';

const routes: Routes = [
  {
  path:"home",component: AdminhomeComponent,
  children: [
    {
      path:"",
      component: DramasComponent
    },
    {
      path: "dramas",
      component: DramasComponent
    },
    {
      path: "topchart",
      component: TopchartComponent
    },
    {
      path: "existingDramas",
      component: ExistingdramasComponent
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
