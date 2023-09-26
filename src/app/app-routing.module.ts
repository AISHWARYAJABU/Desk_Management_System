import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StatisticsComponent } from './statistics/statistics.component';


const routes: Routes = [
  { path: '', component: Dashboard1Component },
   { path: 'seat', component: SidenavComponent },
  // { path:'',component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



