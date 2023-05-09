import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ViewComponent } from './common/view/view.component';
import { NotificationsComponent } from './common/notifications/notifications.component';

const routes: Routes = [
  {path:"authentication",component: AuthenticationComponent},
  {path:"Dramas/:id",component: ViewComponent},
  // {path:"notifications",component: NotificationsComponent},
  {path:"userside",
  loadChildren:() => import('./userside/userside.module').then(m => m.UsersideModule)},
  {path:"adminside",loadChildren: 
  () => import('./adminside/adminside.module').then(m => m.AdminsideModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
