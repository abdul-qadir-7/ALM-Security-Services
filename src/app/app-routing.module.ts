import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ClientsComponent } from './clients/clients.component';
import { SurveillanceComponent } from './surveillance/surveillance.component';
const routerOptions: ExtraOptions = {
   scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
   //scrollOffset: [10, 4],
};
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'expertise',component:ExpertiseComponent,children:[{path:'surveillance',component:SurveillanceComponent}]},
  {path:'clients',component:ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
