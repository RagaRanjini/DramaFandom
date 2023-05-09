import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DramasComponent } from '../common/dramas/dramas.component';
import { KdramasComponent } from './home/kdramas/kdramas.component';
import { CdramasComponent } from './home/cdramas/cdramas.component';
import { JdramasComponent } from './home/jdramas/jdramas.component';
import { TopchartComponent } from '../common/topchart/topchart.component';
import { NotificationsComponent } from '../common/notifications/notifications.component';

const routes: Routes = [
  {
  path:"home",component: HomeComponent,
  children: [
    {
      path: "",
      component: DramasComponent
    },
    {
      path: "dramas",
      component: DramasComponent
    },
    {
      path: "kdramas",
      component: KdramasComponent
    },
    {
      path: "cdramas",
      component: CdramasComponent
    },
    {
      path: "jdramas",
      component: JdramasComponent
    },
    {
      path: "topchart",
      component: TopchartComponent
    }
    ,
    {
      path: "notifications",
      component: NotificationsComponent
    }
  ]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersideRoutingModule { }
