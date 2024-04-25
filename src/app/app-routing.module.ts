import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HeaderComponent } from './header/header.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { InstructionspageComponent } from './instructionspage/instructionspage.component';





const routes: Routes = [
  //{ path: '', component: Dashboard1Component },
  //{ path: '', component: HeaderComponent },
   //{ path: 'seat', component: SidenavComponent },
  //{ path:'',component: StatisticsComponent},
  { path: '', component: InstructionspageComponent,pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



